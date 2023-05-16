import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createContactThunk,
  updateContactThunk,
} from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = ({ contactData, handleClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.phone.value,
    };

    if (contactData) {
      const nameTaken = contacts
        .filter(contact => contact.name !== contactData.name)
        .some(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase()
        );

      if (nameTaken) {
        e.currentTarget.reset();
        toast.warn(` ${newContact.name} is already in the contacts.`, {
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

      const id = contactData.id;
      const update = { id, newContact };
      dispatch(updateContactThunk(update));
      handleClose();
      return;
    }

    const sameName = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (sameName) {
      e.currentTarget.reset();
      toast.warn(` ${newContact.name} is already in the contacts.`, {
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

    dispatch(createContactThunk(newContact));
    // e.currentTarget.reset();
  };

  return (
    <>
      <Form id="contact" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label style={contactData ? { color: 'black' } : {}}>
            Name
          </Form.Label>
          <Form.Control
            defaultValue={contactData ? contactData.name : ''}
            style={contactData ? { outline: '1px solid black' } : {}}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className="form-input"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={contactData ? { color: 'black' } : {}}>
            Number
          </Form.Label>
          <Form.Control
            defaultValue={contactData ? contactData.number : ''}
            style={contactData ? { outline: '1px solid black' } : {}}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            className="form-input"
            required
          />
        </Form.Group>

        <div className="btn-wrapper">
          <Button variant="primary" type="submit" className="btn-fit-space">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};
