import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { useEffect, useState } from 'react';

import { PencilSquare, Trash } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/operations';
import {
  getfilteredContacts,
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import s from '../ContactList/ContactList.module.scss';
import BasicModal from 'components/BasicModal/BasicModal';

function ContactList() {
  const [open, setOpen] = useState(false);
  const [contactName, setContactName] = useState('');

  const distpatch = useDispatch();
  const filteredContacts = useSelector(getfilteredContacts);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    distpatch(getAllContactsThunk());
  }, [distpatch]);

  const handleOpen = (name, id) => {
    const contact = { name, id };
    setOpen(true);
    setContactName(contact);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <div>Error: {error.message}</div>}
      {contacts && (
        <>
          <ListGroup>
            {filteredContacts.map(contact => (
              <ListGroup.Item key={contact.id} className={s.item}>
                <div className={s.user}>
                  {contact.name}: {contact.number}
                </div>
                <div>
                  <PencilSquare
                    size={20}
                    onClick
                    style={{
                      cursor: 'pointer',
                      color: '#0D6EFD',
                      marginRight: '10px',
                    }}
                  />
                  <Trash
                    size={20}
                    onClick={() => handleOpen(contact.name, contact.id)}
                    style={{
                      cursor: 'pointer',
                      color: '#0D6EFD',
                    }}
                  />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <BasicModal
            contact={contactName}
            open={open}
            handleClose={handleClose}
          />
        </>
      )}
    </>
  );
}

export default ContactList;
