import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
  const { headingText, descriptionText, children, formType } = props;
  return (
    <div className="min-h-screen flex justify-center items-center text-neutral-200 bg-slate-900">
      <div className="w-max-w p-4 border border-cyan-600 rounded-md">
        <h1 className="mb-2 text-3xl font-bold text-cyan-600">{headingText}</h1>
        <p className="mb-5 italic">{descriptionText}</p>

        {children}
        <FormNavigation formType={formType} />
      </div>
    </div>
  );
};

const FormNavigation = ({ formType }) => {
  if (formType === 'login') {
    return (
      <p className="mt-4 text-sm text-center">
        Don't have an account? {' '}
        <Link to="/register" className="font-semibold underline text-cyan-600 transition ease-in-out delay-200 hover:text-cyan-700">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-4 text-sm text-center">
        Already have an account? {' '}
        <Link to="/login" className="font-semibold underline text-cyan-600 transition ease-in-out delay-200 hover:text-cyan-700">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
