import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';
import { useDispatch } from 'react-redux';
import {
  deleteContactThunk,
  getAllContactsThunk,
} from 'redux/contacts/operations';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
};

export default function BasicModal({ open, handleClose, contact }) {
  const distpatch = useDispatch();
  const handleYes = id => {
    distpatch(deleteContactThunk(id));
    distpatch(getAllContactsThunk());
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
          <ButtonComponent text={'Yes'} onClick={() => handleYes(contact.id)} />
          <ButtonComponent text={'No'} />
        </Box>
      </Modal>
    </div>
  );
}
