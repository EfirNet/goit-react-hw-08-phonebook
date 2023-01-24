import useForm from '../../shared/hooks/useForm';
import { Button, Form, Wrapper, Title, Text, Wrap } from './LoginForm.styled';
import TextField from '../../shared/components/TextField';
import { initialState } from './initialState';
import { fields } from './fields';
import { Link } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const { email, password } = state;

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Text>Log in to work with the phonebook</Text>
      <Form onSubmit={handleSubmit}>
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <Wrap>
          {' '}
          <Button type="submit">Login</Button>
          <Button>
            <Link to={'/register'}>Register</Link>
          </Button>
        </Wrap>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
