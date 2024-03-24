import styled from '@emotion/styled';
import Button from '../../common/Button/Button';
import PALLETTE from '../../../helpers/pallette';

import Yacht from '../../../assets/icons/yacht-ape.svg?react';
import Discord from '../../../assets/icons/discord.svg?react';
import X from '../../../assets/icons/x.svg?react';

import VIEWPORTS from '../../../helpers/viewports';

interface Props {
  mobile: boolean;
  open?: boolean;
}

const { tablet, desktop } = VIEWPORTS;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  @media screen and (min-width: ${`${desktop}px`}) {
    gap: 16px;
  }
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

  @media screen and (min-width: ${`${tablet}px`}) {
    border-radius: 12px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 80px;
    height: 80px;
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

    text-decoration: underline;
  }

  @media screen and (min-width: ${`${tablet}px`}) {
    border-radius: ${(props: Props) => (props.open ? '0 12px 12px 0' : '12px')};
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 80px;
    height: 80px;

    font-size: 16px;
  }
`;

export const IconYacht = styled(Yacht)`
  width: 16px;
  height: 16px;

  fill: currentColor;

  @media screen and (min-width: ${`${tablet}px`}) {
    width: 24px;
    height: 24px;
  }
`;

export const IconDiscord = styled(Discord)`
  width: 16px;
  height: 16px;

  fill: currentColor;

  @media screen and (min-width: ${`${tablet}px`}) {
    width: 24px;
    height: 24px;
  }
`;

export const IconX = styled(X)`
  width: 16px;
  height: 16px;

  fill: currentColor;

  @media screen and (min-width: ${`${tablet}px`}) {
    width: 24px;
    height: 24px;
  }
`;
