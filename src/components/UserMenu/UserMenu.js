import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import operations from 'redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <span className={css.name}>Hello, {user.name}</span>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        Выйти
      </button>
    </div>
  );
}
