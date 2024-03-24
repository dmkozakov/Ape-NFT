import styled from '@emotion/styled';
import MainText from '../../common/MainText/MainText';
import PALLETTE from '../../../helpers/pallette';
import VIEWPORTS from '../../../helpers/viewports';

interface Props {
  open: boolean;
}

const { desktop } = VIEWPORTS;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  z-index: 3;
  right: 48px;

  overflow: hidden;

  transform: ${(props: Props) =>
    props.open ? 'translateX(0)' : 'translateX(120%)'};

  transition: transform 250ms linear;

  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  @media screen and (min-width: ${`${desktop}px`}) {
    right: 80px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;

  padding: 10px 0;

  backdrop-filter: blur(12px);
  background: ${PALLETTE.bgBtn};

  text-decoration: none;

  transition: color 250ms linear;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${PALLETTE.textLightMain};

    p {
      color: ${PALLETTE.textLightMain};
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 80px;
    height: 80px;
  }
`;

export const Title = styled(MainText)`
  font-family: 'Messina Sans';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;

  color: ${PALLETTE.textDarkMain};

  pointer-events: none;

  @media screen and (min-width: ${`${desktop}px`}) {
    font-size: 16px;
  }
`;
