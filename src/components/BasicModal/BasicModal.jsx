import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';
import { useDispatch } from 'react-redux';
import {
  deleteContactThunk,
  getAllContactsThunk,
} from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 326,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  p: 2,
  boxShadow: 24,
  borderRadius: 2,
};

export default function BasicModal({ open, handleClose, contactData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      console.log('dismounting Modal');
    };
  }, [dispatch]);

  const handleYes = id => {
    dispatch(deleteContactThunk(id));
    dispatch(getAllContactsThunk());
    handleClose();
  };

  const handleNo = () => {
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {contactData && contactData.action === 'delete' ? (
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              Delete "{contactData.name}" contact?
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <ButtonComponent
                text={'Yes'}
                onClick={() => handleYes(contactData.id)}
              />
              <ButtonComponent text={'No'} onClick={handleNo} />
            </div>
          </Box>
        ) : (
          <Box sx={style}>
            <ContactForm contactData={contactData} handleClose={handleClose} />
          </Box>
        )}
      </Modal>
    </div>
  );
}
