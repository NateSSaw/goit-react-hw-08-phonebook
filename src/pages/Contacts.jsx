import Filter from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import css from 'pages/Contacts.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsState, getFilterState } from 'redux/contacts/selectors';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsState);

  const filter = useSelector(getFilterState);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filter === '' ? contacts : filteredContacts;
  };
  return (
    <>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ul className={css.list}>
        {filterContacts().map(({ id, name, number }) => {
          return (
            <li key={id} data-key={id} className={css.item}>
              <span className={css.name}>{name} :</span>
              <span>{number}</span>

              <button
                className={css.btn}
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
