import styled from '@emotion/styled';

import Icon from '../../../assets/icons/up-left-arrow.svg?react';
import PALLETTE from '../../../helpers/pallette';

export const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 48px;
`;

export const IconArrow = styled(Icon)`
  align-self: flex-end;

  width: 16px;
  height: 16px;

  fill: ${PALLETTE.textLightMain};
`;
