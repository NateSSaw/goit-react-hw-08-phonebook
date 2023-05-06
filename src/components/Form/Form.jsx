import css from 'components/Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations';
import { getContactsState } from 'redux/contacts/selectors';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsState);
  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = { name: name, number: number };
    const dublicateContact = contacts.find(item => item.name === name);
    if (dublicateContact) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContactThunk(contact));

      form.reset();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="name"
          className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Phone
        <input
          type="tel"
          name="number"
          placeholder="number"
          className={css.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}
