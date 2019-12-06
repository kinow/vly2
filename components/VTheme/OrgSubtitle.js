
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

const OrgSubtitle = ({ item, path }) =>
  item
    ? (
      <Link href={`/${path}/${item._id}`}>
        <h5>
        <a style={{ display: 'block', margin: '0' }}>
        
          {item.name}
        </a>
        </h5>
      </Link>)
    : ''

OrgSubtitle.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    imgUrl: PropTypes.string
  }),
  path: PropTypes.string
}

export default OrgSubtitle
