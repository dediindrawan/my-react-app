const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="font-semibold">
      {children}
    </label>
  );
};

export default Label;
