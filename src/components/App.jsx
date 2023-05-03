import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/thunk';

export const App = () => {
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(getContactsThunk());
  }, [distpatch]);

  return (
    <div className={'container'}>
      <h1 className={'title'}>Phonebook</h1>
      <ContactForm />
      <h2 className={'title'}>Contacts</h2>
      <>
        <Filter />
        <ContactList />
      </>
    </div>
  );
};
