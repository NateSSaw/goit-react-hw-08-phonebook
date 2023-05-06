import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/operations';
import css from './Register.module.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Registration</h2>

      <form
        className={css.form}
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="off"
      >
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={css.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
