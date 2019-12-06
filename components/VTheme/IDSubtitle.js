
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
/*
  Display any entity that has a name and imgUrl
  Clicks through to the resource + id
  entity {
    name:
    imgUrl
  }
  type = orgaanisation, person, activity
*/

const IDSubtitle = ({ item, path }) =>
  item
    ? (
      <Link href={`/${path}/${item._id}`}>
        <a style={{ display: 'block', margin: '0' }}>
          <span>{item.name}</span>
        </a>
      </Link>)
    : ''

IDSubtitle.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    imgUrl: PropTypes.string
  }),
  path: PropTypes.string
}

export default IDSubtitle
