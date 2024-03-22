import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';

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
  cursor: pointer;

  color: ${PALLETTE.textDarkMain};
  background: ${PALLETTE.bgBtn};

  transition: color 250ms ease-in-out;

  & > span {
    transition: color 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    color: ${PALLETTE.textLightMain};

    & > span {
      color: ${PALLETTE.textLightMain};
    }
  }
`;
