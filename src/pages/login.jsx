import AuthLayouts from '../components/layouts/AuthLayouts';
import LoginForm from '../components/fragments/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayouts headingText="Login" descriptionText="Hi, welcome back!" formType="login">
      <LoginForm />
    </AuthLayouts>
  );
};

export default LoginPage;
