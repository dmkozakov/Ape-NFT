import styled from '@emotion/styled';
import PALLETTE from '../../helpers/pallette';

import IconCross from '../../assets/icons/cross.svg?react';

export const Banner = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 52px;

  overflow: hidden;
  white-space: nowrap;

  color: ${PALLETTE.textDarkMain};
  background-color: ${PALLETTE.accent};
`;

export const Icon = styled(IconCross)`
  width: 36px;
  height: 36px;

  margin-left: 24px;
  margin-right: 24px;

  transform: translateY(4px);

  fill: ${PALLETTE.textLightMain};
`;
