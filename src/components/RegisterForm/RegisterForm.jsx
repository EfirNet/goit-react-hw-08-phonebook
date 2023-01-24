import useForm from '../../shared/hooks/useForm';
import TextField from '../../shared/components/TextField';
import {
  Button,
  Form,
  Wrapper,
  Title,
  Text,
  Wrap,
  ButtonLink,
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
      <Wrap>
        <ButtonLink>
          <Link to={'/login'}>Login</Link>
        </ButtonLink>
        <Title>Phonebook</Title>
      </Wrap>
      <Text>Register to work with the phonebook</Text>
      <Form onSubmit={handleSubmit}>
        <TextField
          value={name}
          onChange={handleChange}
          {...fields.name}
          pattern={"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
        />
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <Wrap>
          <Button type="submit">Register</Button>
        </Wrap>
      </Form>
    </Wrapper>
  );
};

export default RegisterForm;
