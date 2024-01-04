const Button = (props) => {
  const { children = 'Button' } = props;
  return (
    <button className="w-full h-10 px-6 font-semibold rounded-md bg-cyan-600 transition ease-in-out delay-200 hover:bg-sky-700 text-white" type="submit">
      {children}
    </button>
  );
};

export default Button;
