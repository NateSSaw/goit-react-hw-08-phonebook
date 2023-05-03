import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import operations from 'redux/auth/operations';

const styles = {
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <span style={styles.name}>Добро пожаловать, {user.name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
