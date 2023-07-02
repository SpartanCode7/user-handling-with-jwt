import PropTypes from 'prop-types'

const Span = ({ children }) => {

  const spanStyle = "text-secondary"

  return (
    <span className={spanStyle}>{children}</span>
  )
}

Span.propTypes = {
    children: PropTypes.string.isRequired
}

export default Span