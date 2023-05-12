import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';

const ContactsPage = () => {
  return (
    <div className={'container'}>
      <UserMenu />
      <h1 className={'title'}>Phonebook</h1>
      <ContactForm />
      <h1 className={'title'}>Contacts</h1>
      <>
        <Filter />
        <ContactList />
      </>
    </div>
  );
};

export default ContactsPage;
