import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';

const ContactsPage = () => {
  return (
    <Container>
      <UserMenu />
      <h1 className={'title title-not-first'}>Phonebook</h1>
      <ContactForm />
      <h1 className={'title title-not-first'}>Contacts</h1>
      <>
        <Filter />
        <ContactList />
      </>
    </Container>
  );
};

export default ContactsPage;
