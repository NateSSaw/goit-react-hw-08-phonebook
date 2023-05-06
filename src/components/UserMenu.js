import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import operations from 'redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <span>Hello, {user.name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
