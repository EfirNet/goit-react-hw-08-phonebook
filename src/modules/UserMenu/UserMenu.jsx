import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import { Button, Wrapper, Text } from './UserMenu.styled.js';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <Text>{email}</Text>
      <Button onClick={onLogout}>Logout</Button>
    </Wrapper>
  );
};

export default UserMenu;
