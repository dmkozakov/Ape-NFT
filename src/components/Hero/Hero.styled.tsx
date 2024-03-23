import styled from '@emotion/styled';
import PALLETTE from '../../helpers/pallette.js';
import Button from '../common/Button/Button.js';

export const Wrapper = styled.section`
  padding-left: 8px;
  padding-right: 8px;
`;

export const Container = styled.div`
  max-width: 216px;
`;

export const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 470px;
  width: 100%;
  min-width: 320px;
  height: 542px;

  margin-left: auto;
  margin-right: auto;
  padding-top: 34px;
  padding-bottom: 19px;

  border-radius: 12px;

  color: ${PALLETTE.textDarkMain};
  background-color: ${PALLETTE.bgHero};
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 6px;

  h1 {
    margin-bottom: 8px;

    font-family: 'Right Grotesk';
    font-size: 44px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.44px;
  }

  p {
    font-family: 'Biro Script';
    font-weight: 400;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.68;
  }
`;

export const HeroBtn = styled(Button)`
  padding: 10px 74px 12px 74px;

  transform: translateY(-4px);
`;

export const HeroDescr = styled.p`
  margin-top: 8px;

  font-family: 'Messina Sans';
  font-size: 12px;
  font-weight: 400;

  line-height: 1.16;

  text-align: center;
  text-transform: uppercase;
`;
