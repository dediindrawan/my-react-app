import InputBox from './Input';
import Label from './Label';

const InputGroup = (props) => {
  const { htmlFor, children, type, name, placeholder } = props;
  return (
    <div className='mb-4'>
      <Label htmlFor={htmlFor}>{children}</Label>
      <InputBox type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

export default InputGroup;
