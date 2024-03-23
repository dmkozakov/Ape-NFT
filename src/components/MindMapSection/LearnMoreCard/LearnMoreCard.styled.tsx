import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 216px;
  height: 242px;

  margin-left: 1px;
  padding: 24px 12px;

  border-radius: 12px;
  text-decoration: none;

  background-color: ${PALLETTE.accent};
`;
