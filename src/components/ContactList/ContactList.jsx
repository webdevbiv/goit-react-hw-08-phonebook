import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/thunk';
import {
  getfilteredContacts,
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../ContactList/ContactList.module.scss';

function ContactList() {
  const distpatch = useDispatch();
  const filteredContacts = useSelector(getfilteredContacts);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {contacts && (
        <ListGroup>
          {filteredContacts.map(contact => (
            <ListGroup.Item key={contact.id} className={s.item}>
              <div className={s.user}>
                {contact.name}: {contact.phone}
              </div>
              <Button
                variant="primary"
                type="button"
                onClick={() => distpatch(deleteContactThunk(contact.id))}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default ContactList;
