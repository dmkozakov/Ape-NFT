import styled from '@emotion/styled';
import Button from '../Button/Button';
import PALLETTE from '../../helpers/pallette';

import Yacht from '../../assets/icons/yacht-ape.svg?react';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
`;

export const Btn = styled(Button)`
  width: 48px;
  height: 48px;

  font-family: 'Messina Sans';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;

  text-transform: uppercase;

  color: ${PALLETTE.textDarkMain};

  & > svg {
    fill: ${PALLETTE.textDarkMain};

    transition: fill 250ms ease-in-out;
  }

  &:hover > svg {
    fill: ${PALLETTE.textLightMain};
  }
`;

export const IconYacht = styled(Yacht)`
  fill: currentColor;
`;
