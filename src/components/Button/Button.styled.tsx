import styled from '@emotion/styled';
import PALLETTE from '../../helpers/pallette';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  font-family: 'Right Grotesk';
  font-weight: 900;
  font-size: 16px;
  line-height: 1.1875;

  border-radius: 8px;
  border: none;
  backdrop-filter: blur(12px);
  background: ${PALLETTE.bgBtn};
`;
