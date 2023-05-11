import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { addContactThunk } from 'redux/contacts/thunk';
import { selectContacts } from 'redux/selectors';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newContact = {
      id: nanoid(6),
      name: form.elements.name.value,
      phone: form.elements.phone.value,
    };
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    e.currentTarget.reset();
    if (isExist) {
      toast.warn(`🦄 ${newContact.name} is already in the contacts.`, {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    dispatch(addContactThunk(newContact));
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        theme="light"
      />

      <Form id="contact" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label> Name </Form.Label>
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Number </Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
