import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';
import MainText from '../../common/MainText/MainText';

export const Container = styled.div`
  position: absolute;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 100vh;

  padding-top: 130px;
  padding-bottom: 24px;

  color: ${PALLETTE.textLightMain};
  background-color: ${PALLETTE.textDarkMain};
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

  &:hover p,
  &:focus p {
    color: ${PALLETTE.accent};
  }
`;

export const Title = styled(MainText)`
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
`;

export const Copyright = styled(MainText)`
  width: 216px;
`;
