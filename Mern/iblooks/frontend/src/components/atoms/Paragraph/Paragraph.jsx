import PropTypes from 'prop-types'

const Paragraph = ({ children }) => {
  return (
    <p>{ children }</p>
  )
}

Paragraph.propTypes = {
    children: PropTypes.string.isRequired
}

export default Paragraph