import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

const ContactsPage = () => {
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

export default ContactsPage;
