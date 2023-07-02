const Input = ({ type, name, value, onChange }) => {
  return <input className="border-2 bg- border-secondary" type={type} name={name} value={value} onChange={onChange} />;
};

export default Input;
