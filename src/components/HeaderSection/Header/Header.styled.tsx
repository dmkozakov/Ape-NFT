import styled from '@emotion/styled';
import Icon from '../../../assets/icons/logo.svg?react';
import PALLETTE from '../../../helpers/pallette';
import VIEWPORTS from '../../../helpers/viewports';

interface Props {
  mobile: boolean;
}

const { tablet, desktop } = VIEWPORTS;

export const Header = styled.header`
  position: relative;

  width: 100%;
  max-width: 480px;

  margin: 0 auto;

  overflow-x: clip;

  @media screen and (min-width: ${`${tablet}px`}) {
    max-width: 768px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    max-width: 1280px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 62px;
  left: 16px;
  right: 16px;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: start;

  @media screen and (max-width: ${`${tablet - 1}px`}) {
    pointer-events: none;
  }

  @media screen and (min-width: ${`${tablet}px`}) {
    top: 66px;
    left: 28px;
    right: 28px;

    overflow-x: hidden;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    top: 40px;
    left: 32px;
    right: 32px;
  }
`;

export const Link = styled.a`
  text-decoration: none;

  pointer-events: all;

  svg {
    fill: ${(props: Props) =>
      props.mobile ? PALLETTE.textLightMain : PALLETTE.textDarkMain};
  }

  &:hover > svg,
  &:focus > svg {
    fill: ${(props: Props) =>
      props.mobile ? PALLETTE.accent : PALLETTE.textLightMain};
  }
`;

export const Logo = styled(Icon)`
  margin-top: 8px;

  transition: fill 250ms ease-in-out;

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 72px;
    height: 50px;
  }
`;
