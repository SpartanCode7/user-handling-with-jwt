import PropTypes from 'prop-types'

const Button = ({ href, children }) => {

  const buttonStyle = "text-secondary bg-primary px-3 py-1 rounded"

  return (
    <a className={buttonStyle} href={href}>{children}</a>
  )
}

Button.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Button