import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TypographyStyled = styled(Typography)`
  font-weight: 'bold';
  font-size: '16px';
  '@media (min-width: 660px)': {
    fontsize: '20px';
  }
`;
