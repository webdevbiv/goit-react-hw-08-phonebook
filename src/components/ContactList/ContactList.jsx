import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicModal from 'components/BasicModal/BasicModal';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { useEffect, useState } from 'react';
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

function ContactList() {
  const [open, setOpen] = useState(false);
  const [contactData, setContactData] = useState('');

  const distpatch = useDispatch();
  const filteredContacts = useSelector(getfilteredContacts);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    distpatch(getAllContactsThunk());
    if (!open) {
      distpatch(getAllContactsThunk());
    }
  }, [distpatch, open]);

  const handleOpenEdit = (name, number, id) => {
    const action = 'edit';
    const contactData = { action, name, number, id };
    setOpen(true);
    setContactData(contactData);
  };

  const handleOpenDelete = (name, number, id) => {
    const action = 'delete';
    const contactData = { action, name, number, id };
    console.log(contactData);
    setOpen(true);
    setContactData(contactData);
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
              <ListGroup.Item
                key={contact.id}
                className={s.item}
                style={{ padding: '8px' }}
              >
                <div className={s.user}>
                  {contact.name}: {contact.number}
                </div>
                <div>
                  <EditIcon
                    onClick={() =>
                      handleOpenEdit(contact.name, contact.number, contact.id)
                    }
                    sx={{
                      cursor: 'pointer',
                      fontSize: 20,
                      marginRight: '5px',
                      color: '#0A57CA',
                      '&:hover': {
                        color: '#084197',
                      },
                    }}
                  />
                  <DeleteForeverIcon
                    onClick={() =>
                      handleOpenDelete(contact.name, contact.number, contact.id)
                    }
                    sx={{
                      cursor: 'pointer',
                      fontSize: 22,
                      color: '#0A57CA',
                      '&:hover': {
                        color: '#084197',
                      },
                    }}
                  />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <BasicModal
            contactData={contactData}
            open={open}
            handleClose={handleClose}
          />
        </>
      )}
    </>
  );
}

export default ContactList;
