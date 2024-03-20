import styled from '@emotion/styled';
import Icon from '../../assets/icons/logo.svg?react';
import PALLETTE from '../../helpers/pallette';

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
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Nav = styled.nav``;

export const Logo = styled(Icon)`
  fill: ${PALLETTE.textDarkMain};

  transition: fill 250ms ease-in-out;

  &:hover {
    fill: ${PALLETTE.textLightMain};
  }
`;
