import styled from '@emotion/styled';
import Icon from '../../../assets/icons/logo.svg?react';
import PALLETTE from '../../../helpers/pallette';

interface Props {
  mobile: boolean;
}

export const Wrapper = styled.header`
  position: relative;

  width: 100%;
  max-width: 480px;

  margin: 0 auto;
`;

export const Header = styled.div`
  position: absolute;
  top: 62px;
  left: 16px;
  right: 16px;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Link = styled.a`
  transform: translateY(8px);

  text-decoration: none;

  &:hover > svg,
  &:focus > svg {
    fill: ${(props: Props) =>
      props.mobile ? PALLETTE.accent : PALLETTE.textLightMain};
  }
`;

export const Logo = styled(Icon)`
  fill: ${(props: Props) =>
    props.mobile ? PALLETTE.textLightMain : PALLETTE.textDarkMain};

  transition: fill 250ms ease-in-out;
`;
