const AuthLayouts = (props) => {
  const { headingText, descriptionText, children } = props;
  return (
    <div className="min-h-screen flex justify-center items-center text-neutral-200 bg-slate-900">
      <div className="w-max-w p-4 border border-cyan-600 rounded-md">
        <h1 className="mb-2 text-3xl font-bold text-cyan-600">{headingText}</h1>
        <p className="mb-5 italic">{descriptionText}</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
