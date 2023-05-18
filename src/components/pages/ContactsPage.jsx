import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';

const ContactsPage = () => {
  useEffect(() => {
    document.title = 'Contacts';
  }, []);
  return (
    <>
      <Container>
        <h1 className={'title '}>Phonebook</h1>
        <ContactForm />
        <h1 className={'title title-not-first'}>Contacts</h1>
        <>
          <Filter />
          <ContactList />
        </>
      </Container>
    </>
  );
};

export default ContactsPage;
