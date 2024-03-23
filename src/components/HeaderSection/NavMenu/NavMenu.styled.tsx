import styled from '@emotion/styled';
import Button from '../../common/Button/Button';
import PALLETTE from '../../../helpers/pallette';

import Yacht from '../../../assets/icons/yacht-ape.svg?react';

interface Props {
  mobile: boolean;
}

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
`;

export const Link = styled.a`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  border-radius: 8px;
  backdrop-filter: blur(12px);
  cursor: pointer;
  text-decoration: none;

  color: ${(props: Props) =>
    props.mobile ? PALLETTE.textLightMain : PALLETTE.textDarkMain};
  background: ${(props: Props) =>
    props.mobile ? PALLETTE.bgBtnLight : PALLETTE.bgBtn};

  & > svg {
    fill: ${(props: Props) =>
      props.mobile ? PALLETTE.textLightMain : PALLETTE.textDarkMain};

    transition: fill 250ms ease-in-out;
  }

  &:hover > svg,
  &:focus > svg {
    fill: ${(props: Props) =>
      props.mobile ? PALLETTE.accent : PALLETTE.textLightMain};
  }
`;

export const Btn = styled(Button)`
  width: 48px;
  height: 48px;

  font-family: 'Messina Sans';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;

  text-transform: uppercase;

  color: ${(props: Props) =>
    props.mobile ? PALLETTE.textLightMain : PALLETTE.textDarkMain};
  background: ${(props: Props) =>
    props.mobile ? PALLETTE.bgBtnLight : PALLETTE.bgBtn};

  & > svg {
    fill: ${(props: Props) =>
      props.mobile ? PALLETTE.textLightMain : PALLETTE.textDarkMain};

    transition: fill 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    color: ${(props: Props) =>
      props.mobile ? PALLETTE.accent : PALLETTE.textLightMain};
  }
`;

export const IconYacht = styled(Yacht)`
  fill: currentColor;
`;
