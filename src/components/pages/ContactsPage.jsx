import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import Toast from 'components/Toast/Toast';

const ContactsPage = () => {
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
