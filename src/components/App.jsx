import Form from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

export default function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Form />

      <div>
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
}
