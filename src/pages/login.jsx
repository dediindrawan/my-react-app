import { Link } from 'react-router-dom';
import AuthLayouts from '../components/layouts/AuthLayouts';
import LoginForm from '../components/fragments/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayouts headingText="Login" descriptionText="Hi, welcome back!">
      <LoginForm />
      <p className="mt-4 text-sm text-center">
        Don't have an account?{' '}
        <Link to="/register" className="font-semibold underline text-cyan-600 transition ease-in-out delay-200 hover:text-cyan-700">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
