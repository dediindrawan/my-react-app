import Button from '../elements/button';
import InputGroup from '../elements/input';

const RegisterForm = () => {
  return (
    <form action="">
      <InputGroup htmlFor="name" children="Fullname" type="text" name="name" placeholder="John Doe"></InputGroup>

      <InputGroup htmlFor="email" children="Email" type="email" name="email" placeholder="example@gmail.com"></InputGroup>

      <InputGroup htmlFor="password" children="Password" type="password" name="password" placeholder="myPassword123*"></InputGroup>

      <InputGroup htmlFor="confirm-password" children="Confirm Password" type="password" name="confirm-password" placeholder="myPassword123*"></InputGroup>

      <Button children="Register"></Button>
    </form>
  );
};

export default RegisterForm;
