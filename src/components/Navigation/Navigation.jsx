import MenuIcon from '@mui/icons-material/Menu';
import { Box, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { ButtonComponent } from 'components/ButtonComponent/ButtonComponent';
import { useAuth } from 'components/hooks';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconButtonStyled } from './Navigation.style';

const Navigation = () => {
  const { loggedin } = useAuth();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isMobile ? (
        <>
          <IconButtonStyled
            onClick={handleClick}
            sx={{ height: '40px', width: '40px' }}
          >
            <MenuIcon />
          </IconButtonStyled>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to="/"
              underline="none"
              color="inherit"
            >
              Home
            </MenuItem>
            {loggedin && (
              <MenuItem
                onClick={handleClose}
                component={NavLink}
                to="/contacts"
                underline="none"
                color="inherit"
              >
                Contacts
              </MenuItem>
            )}
          </Menu>
        </>
      ) : (
        <>
          <ButtonComponent text={'Home'} to={'/'} marginRight={'20px'} />
          {loggedin && <ButtonComponent text={'Contacts'} to={'/contacts'} />}
        </>
      )}
    </Box>
  );
};

export default Navigation;
