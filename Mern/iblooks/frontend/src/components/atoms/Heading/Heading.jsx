import PropTypes from 'prop-types'

const Heading = ({ level, children }) => {

    const HeadingTag = `h${level}`

    const getHeadingStyles = (level) => {
        switch (level) {
          case '1':
            return 'text-5xl text-secondary';
          case '2':
            return 'text-4xl text-blue';
          case '3':
            return 'text-3xl text-red';
          case '4':
            return 'text-2xl text-pink';
          case '5':
            return 'text-xl text-secondary';
          case '6':
            return 'text-lg text-secondary';
          default:
            return 'text-lg';
        }
    }

    const headingStyles = getHeadingStyles(level)

  return (
    <HeadingTag className={headingStyles}>{children}</HeadingTag>
  )
}

Heading.propTypes = {
    level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
}

export default Heading