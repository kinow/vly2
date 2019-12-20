/* Display a grid of opanisation cards from an [op]
 */
import React from 'react'
import PropTypes from 'prop-types'
import OpCard from './OpCard'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const CardContainer = styled.div`
  display:grid;
  grid-template-columns: auto;
  grid-column-gap: 30px;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const OpList = ({ ops, ...props }) => (
  <CardContainer>
    {ops ? (
      ops.map((op, index) =>
        <CardWrapper key={index}>
          <OpCard size='Small' op={op} />
        </CardWrapper>
      )
    ) : (
      <FormattedMessage
        id='op.list.empty'
        defaultMessage='No matching opportunities'
        description='no opportunities message in OpList'
      />
    )}
  </CardContainer>
)

OpList.propTypes = {
  ops: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      imgUrl: PropTypes.any,
      duration: PropTypes.string
    })
  ) // optional
}

export default OpList
