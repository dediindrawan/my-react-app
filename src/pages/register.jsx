import AuthLayouts from '../components/layouts/AuthLayouts';
import RegisterForm from '../components/fragments/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthLayouts headingText="Register" descriptionText="Hi, welcome. Please enter your details." formType="register">
      <RegisterForm />
    </AuthLayouts>
  );
};

export default RegisterPage;
