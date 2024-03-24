import styled from '@emotion/styled';
import PALLETTE from '../../helpers/pallette';

import IconCross from '../../assets/icons/cross.svg?react';
import VIEWPORTS from '../../helpers/viewports';

const { desktop } = VIEWPORTS;

export const Banner = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 52px;

  overflow: hidden;
  white-space: nowrap;

  color: ${PALLETTE.textDarkMain};
  background-color: ${PALLETTE.accent};

  @media screen and (min-width: ${`${desktop}px`}) {
    height: 86px;

    span {
      font-size: 64px;
    }
  }
`;

export const Icon = styled(IconCross)`
  width: 36px;
  height: 36px;

  margin-left: 24px;
  margin-right: 24px;

  transform: translateY(4px);

  fill: ${PALLETTE.textLightMain};

  @media screen and (min-width: ${`${desktop}px`}) {
    margin: 0 36px;

    transform: translateY(-4px);
  }
`;
