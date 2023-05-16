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
  const [openModal, setOpenModal] = useState(false);
  const [contactData, setContactData] = useState('');

  const dispatch = useDispatch();
  const filteredContacts = useSelector(getfilteredContacts);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  const handleOpenModal = (name, number, id, action) => {
    const contactData = { action, name, number, id };
    setOpenModal(true);
    setContactData(contactData);
  };

  const handleClose = () => {
    setOpenModal(false);
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
                      handleOpenModal(
                        contact.name,
                        contact.number,
                        contact.id,
                        'edit'
                      )
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
                      handleOpenModal(
                        contact.name,
                        contact.number,
                        contact.id,
                        'delete'
                      )
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
            open={openModal}
            handleClose={handleClose}
          />
        </>
      )}
    </>
  );
}

export default ContactList;
