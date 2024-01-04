import { Link } from 'react-router-dom';
import AuthLayouts from '../components/layouts/AuthLayouts';
import RegisterForm from '../components/fragments/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthLayouts headingText="Register" descriptionText="Hi, welcome. Please enter your details.">
      <RegisterForm />
      <p className="mt-4 text-sm text-center">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold underline text-cyan-600 transition ease-in-out delay-200 hover:text-cyan-700">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
