import styled from '@emotion/styled';
import PALLETTE from '../../helpers/pallette';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 216px;
  height: 242px;

  padding: 24px 12px;

  border-radius: 12px;

  color: ${PALLETTE.textLightMain};
  background-color: ${PALLETTE.textDarkMain};
`;
