const InputBox = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="w-full py-2 px-3 bg-transparent border border-cyan-600 border-opacity-50 rounded-md outline-none focus:border-opacity-100 transition ease-in-out delay-200"
    />
  );
};

export default InputBox;
