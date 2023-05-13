import axios from 'axios';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(data) {
  const res = await axios.post(`/contacts`, data);
  return res.data;
}

export async function deleteContact(id) {
  const res = await axios.delete(`/contacts/${id}`);
  return res.data.id;
}
