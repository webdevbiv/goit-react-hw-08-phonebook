import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const ButtonComponent = ({
  to,
  text,
  marginRight,
  onClick,
  marginLeft,
}) => {
  return (
    <NavLink to={to}>
      <Button
        onClick={onClick}
        sx={{
          width: '100px',
          height: '50px',
          backgroundColor: '#0A57CA',
          marginRight: { marginRight },
          marginLeft: { marginLeft },
          '&:hover': {
            backgroundColor: '#084197',
          },
        }}
      >
        <Typography
          variant="button"
          sx={{
            fontSize: '1.20rem',
            lineHeight: '1.6',
            letterSpacing: '0.0075em',
            textTransform: 'capitalize',
            color: 'white',
            backgroundColor: '',
          }}
        >
          {text}
        </Typography>
      </Button>
    </NavLink>
  );
};
