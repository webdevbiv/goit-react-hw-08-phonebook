import axios from 'axios';

axios.defaults.baseURL = 'https://644bd98b17e2663b9dfa177a.mockapi.io';

const publicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const privateInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const userSignup = async credentials => {
  return await publicInstance.post('/users/signup', credentials);
};

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
