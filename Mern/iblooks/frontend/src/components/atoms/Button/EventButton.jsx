import PropTypes from 'prop-types';

const EventButton = ({ onClick, children, type }) => {
  return <button onClick={onClick}  type={type}>{children}</button>;
}

EventButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  type:PropTypes.string,
}

export default EventButton;
