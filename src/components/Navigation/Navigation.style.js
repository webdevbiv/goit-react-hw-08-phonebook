import { Box, IconButton, Toolbar } from '@mui/material';
import styled from 'styled-components';

export const IconButtonStyled = styled(IconButton)`
  width: 48px;
  height: 48px;
`;

export const BoxStyled = styled(Box)`
  flex-grow: 1;
`;

export const ToolbarStyled = styled(Toolbar)`
  padding-right: 50px;
  padding-left: 50px;
`;

IconButtonStyled.defaultProps = {
  size: 'large',
  edge: 'start',
  color: 'inherit',
  'aria-label': 'menu',
};
