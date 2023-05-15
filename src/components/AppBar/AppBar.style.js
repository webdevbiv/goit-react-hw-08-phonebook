import { AppBar, Box, Toolbar } from '@mui/material';
import styled from 'styled-components';

export const AppBarStyled = styled(AppBar)`
  padding-left: 60px;
  padding-right: 60px;
  @media (max-width: 450px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ToolbarStyled = styled(Toolbar)``;

export const BoxStyled = styled(Box)`
  flex-grow: 1;
`;

AppBarStyled.defaultProps = {
  variant: 'h6',
  component: 'div',
};
