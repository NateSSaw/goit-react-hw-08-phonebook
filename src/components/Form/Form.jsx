import { useState } from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../redux/contacts/contactsSlice';
import css from 'components/Form/Form.module.css';

export default function Form() {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
  // const { data, error, isLoading } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setPhone(target.value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const onSubmit = e => {
    e.preventDefault();

    if (contacts?.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (contacts?.find(contact => contact.name === '')) {
      alert('Enter name');
      return;
    }
    handleAddContact({ name, phone });
    resetForm();
  };

  const handleAddContact = async contact => {
    try {
      await addContact(contact);
    } catch (error) {}
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
          value={name}
          onChange={onChange}
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
          value={phone}
          onChange={onChange}
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}
