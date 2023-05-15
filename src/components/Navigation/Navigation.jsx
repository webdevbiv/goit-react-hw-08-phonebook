import { useAuth } from 'components/hooks';
import { NavLink } from 'react-router-dom';
import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navigation = () => {
  const { loggedin } = useAuth();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
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
          <Link
            component={NavLink}
            to="/"
            underline="none"
            color="inherit"
            variant="h6"
            sx={{ mr: 2 }}
          >
            Home
          </Link>
          {loggedin && (
            <Link
              component={NavLink}
              to="/contacts"
              underline="none"
              color="inherit"
              variant="h6"
              sx={{ mr: 2 }}
            >
              Contacts
            </Link>
          )}
        </>
      )}
    </Box>
  );

  // return (
  //   <nav>
  //     <NavLink to="/">Home</NavLink>
  //     {loggedin && <NavLink to="contacts">Contacts</NavLink>}
  //   </nav>
  // );
};

export default Navigation;
