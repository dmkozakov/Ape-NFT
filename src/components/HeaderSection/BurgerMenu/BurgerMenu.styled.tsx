import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';
import MainText from '../../common/MainText/MainText';
import VIEWPORTS from '../../../helpers/viewports';

interface Props {
  mobile: boolean;
}

const { tablet } = VIEWPORTS;

export const Container = styled.div`
  position: absolute;
  z-index: 1;

  transition: transform 250ms linear;

  color: ${PALLETTE.textLightMain};

  @media screen and (max-width: ${`${tablet - 1}px`}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    min-height: 100vh;
    min-height: 100svh;

    padding-top: 130px;
    padding-bottom: 24px;

    transform: ${(props: Props) =>
      props.mobile ? 'tranalateX(0)' : 'translateX(100%)'};

    background-color: ${PALLETTE.textDarkMain};
  }
`;

export const Nav = styled.nav`
  display: flex;
  z-index: 5;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  list-style: none;
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  color: ${PALLETTE.accent};

  pointer-events: visible;

  &:hover p,
  &:focus p {
    color: ${PALLETTE.accent};
    text-decoration: underline;
  }
`;

export const Title = styled(MainText)`
  font-size: 24px;
  line-height: 1.2;
  text-align: center;

  pointer-events: none;
`;

export const Copyright = styled(MainText)`
  width: 216px;
`;
