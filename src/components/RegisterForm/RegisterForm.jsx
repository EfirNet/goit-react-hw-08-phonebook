import useForm from '../../shared/hooks/useForm';
import TextField from '../../shared/components/TextField';
import {
  Button,
  Form,
  Wrapper,
  Title,
  Text,
  Wrap,
} from './RegisterForm.styled';
import { initialState } from './initialState';
import { fields } from './fields';
import { Link } from 'react-router-dom';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const { name, email, password } = state;

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Text>Register to work with the phonebook</Text>
      <Form onSubmit={handleSubmit}>
        <TextField value={name} onChange={handleChange} {...fields.name} />
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <Wrap>
          <Button type="submit">Register</Button>
          <Button>
            <Link to={'/login'}>Login</Link>
          </Button>
        </Wrap>
      </Form>
    </Wrapper>
  );
};

export default RegisterForm;
