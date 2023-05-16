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

export default function BasicModal({ open, handleClose, contact }) {
  const distpatch = useDispatch();

  useEffect(() => {
    return () => {
      distpatch(getAllContactsThunk());
    };
  }, [distpatch]);

  const handleYes = id => {
    distpatch(deleteContactThunk(id));
    handleClose();
  };

  const handleNo = id => {
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
        {contact.action === 'delete' ? (
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
              Delete "{contact.name}" contact?
            </Typography>
            <ButtonComponent
              text={'Yes'}
              onClick={() => handleYes(contact.id)}
            />
            <ButtonComponent text={'No'} onClick={handleNo} />
          </Box>
        ) : (
          <Box sx={style}>
            <ContactForm />
          </Box>
        )}
      </Modal>
    </div>
  );
}
