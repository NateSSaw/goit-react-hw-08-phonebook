import axios from 'axios';

axios.defaults.baseURL = 'https://64484cb950c25337443cced2.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact({ name, phone }) {
  const { data } = await axios.post('/contacts');
  return data;
}

export async function deleteContact() {
  const { data } = await axios.delete(`/contacts/${'id'}`);
  return data;
}
