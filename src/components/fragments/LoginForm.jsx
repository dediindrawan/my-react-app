import Button from '../elements/button';
import InputGroup from '../elements/input';

const LoginForm = () => {
  return (
    <form action="">
      <InputGroup htmlFor="email" children="Email" type="email" name="email" placeholder="example@gmail.com"></InputGroup>

      <InputGroup htmlFor="password" children="Password" type="password" name="password" placeholder="myPassword123*"></InputGroup>

      <Button children="Login"></Button>
    </form>
  );
};

export default LoginForm;
