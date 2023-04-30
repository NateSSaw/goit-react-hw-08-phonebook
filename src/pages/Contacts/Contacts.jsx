import css from 'pages/Contacts/Contacts.module.css';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'components/redux/contacts/contactsSlice';
export function Contacts() {
  const { data } = useGetContactsQuery();
  // const { data, error, isLoading } = useGetContactsQuery();

  const [deleteContact, { isLoadingDelete }] = useDeleteContactMutation();
  const filterValue = useSelector(state => state.filter);

  return (
    <ul className={css.list}>
      {data?.map(e => {
        if (!e.name.toLowerCase().includes(filterValue.toLowerCase())) {
          return null;
        }
        return (
          <li key={e.id} data-key={e.id} className={css.item}>
            <span className={css.name}>{e.name} :</span>
            <span>{e.phone}</span>

            <button
              className={css.btn}
              onClick={() => {
                deleteContact(e.id);
              }}
              disabled={isLoadingDelete}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
