import styled from '@emotion/styled';
import PALLETTE from '../../helpers/pallette.js';
import Image from '../common/Image/Image';
import Button from '../common/Button/Button.js';

import VIEWPORTS from '../../helpers/viewports';
import MainText from '../common/MainText/MainText.js';

const { tablet, desktop } = VIEWPORTS;

export const Wrapper = styled.section`
  padding-left: 8px;
  padding-right: 8px;

  @media screen and (min-width: ${`${tablet}px`}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Container = styled.div`
  max-width: 216px;

  @media screen and (min-width: ${`${tablet}px`}) {
    max-width: 736px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    max-width: 1408px;
  }
`;

export const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 470px;
  width: 100%;
  height: 542px;

  margin-left: auto;
  margin-right: auto;
  padding-top: 34px;
  padding-bottom: 19px;

  border-radius: 12px;

  color: ${PALLETTE.textDarkMain};
  background-color: ${PALLETTE.bgHero};

  @media screen and (min-width: ${`${tablet}px`}) {
    position: relative;

    max-width: 736px;
    height: 421px;

    padding: 124px 70px 35px 72px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    max-width: 1408px;
    height: 677px;

    padding: 197px 100px 81px 90px;

    border-radius: 24px;
  }
`;

export const HeroImage = styled(Image)`
  width: 216px;
  height: 284px;

  @media screen and (min-width: ${`${tablet}px`}) {
    position: absolute;
    left: 206px;
    bottom: 0;

    width: 283px;
    height: 386px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    left: 365px;
    bottom: 0;

    width: 463px;
    height: 612px;
  }
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

    letter-spacing: 0.01em;
  }

  p {
    font-family: 'Biro Script';
    font-weight: 400;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.68;
  }

  @media screen and (min-width: ${`${tablet}px`}) {
    align-items: start;

    margin-bottom: 0;

    h1 {
      margin-bottom: 16px;

      font-size: 92px;

      letter-spacing: 0.01em;

      span {
        margin-left: 155px;
      }
    }

    p {
      font-size: 20px;
      line-height: 1.65;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    h1 {
      margin-bottom: 28px;

      font-size: 164px;

      span {
        margin-left: 248px;
      }
    }

    p {
      font-size: 24px;

      &:last-child {
        margin-left: 128px;
      }
    }
  }
`;

export const Div = styled.div`
  width: 216px;

  @media screen and (min-width: ${`${tablet}px`}) {
    position: absolute;
    bottom: 35px;
    right: 72px;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    gap: 16px;

    width: 190px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    bottom: 81px;
    right: 112px;

    gap: 28px;

    width: 337px;
  }
`;

export const HeroBtn = styled(Button)`
  width: 100%;
  height: 41px;

  transform: translateY(-4px);

  @media screen and (min-width: ${`${tablet}px`}) {
    transform: translateY(0);
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    height: 70px;

    span {
      font-size: 28px;
    }
  }
`;

export const HeroDescr = styled(MainText)`
  @media screen and (min-width: ${`${tablet}px`}) {
    margin-top: 0;

    text-align: justify;

    span {
      margin-left: 98px;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    font-size: 16px;

    span {
      margin-left: 84px;
    }
  }
`;
