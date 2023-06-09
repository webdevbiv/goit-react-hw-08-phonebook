import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 326,
  bgcolor: 'background.paper',
  p: 2,
  boxShadow: 24,
  borderRadius: 2,
};

export default function BasicModal({ open, handleClose, contactData }) {
  const dispatch = useDispatch();

  const handleYes = id => {
    dispatch(deleteContactThunk(id));
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
            <UpdateContactForm
              contactData={contactData}
              handleClose={handleClose}
            />
          </Box>
        )}
      </Modal>
    </div>
  );
}
