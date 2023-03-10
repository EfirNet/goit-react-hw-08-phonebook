import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import useAuth from '../../shared/hooks/useAuth';

import { login } from '../../redux/auth/auth-operations';

import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  const isLogin = useAuth();

  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <LoginForm onSubmit={onLogin} />
    </>
  );
};

export default LoginPage;
