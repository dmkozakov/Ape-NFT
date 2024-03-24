import styled from '@emotion/styled';
import VIEWPORTS from '../../helpers/viewports';
import AccentText from '../common/AccentText/AccentText';
import MainText from '../common/MainText/MainText';
import Image from '../common/Image/Image';
import Cross from '../../assets/icons/cross.svg?react';

const { tablet, desktop } = VIEWPORTS;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 60px;

  @media screen and (min-width: ${`${tablet}px`}) {
    padding-top: 80px;
    padding-bottom: 36px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    padding-top: 120px;
    padding-bottom: 40px;
  }
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 216px;

  @media screen and (min-width: ${`${tablet}px`}) {
    width: 592px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 1032px;
  }
`;

export const TextBox = styled.div`
  @media screen and (min-width: ${`${tablet}px`}) {
    display: flex;
    gap: 46px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    gap: 85px;
  }
`;

export const Title = styled(AccentText)`
  @media screen and (min-width: ${`${tablet}px`}) {
    font-size: 60px;

    span {
      font-size: 60px;
    }

    span:last-child {
      display: inline-block;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    font-size: 120px;

    span {
      font-size: 120px;
    }
  }
`;

export const Description = styled(MainText)`
  @media screen and (min-width: ${`${tablet}px`}) {
    max-width: 275px;
    margin: 11px 0 0 0;

    span {
      display: inline-block;
    }

    span:last-child {
      display: block;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    max-width: 409px;
    margin-top: 24px;

    font-size: 24px;

    span {
      font-size: 24px;
    }
  }
`;

export const AboutImage = styled(Image)`
  width: 216px;
  height: 292px;

  @media screen and (min-width: ${`${tablet}px`}) {
    position: absolute;
    bottom: -36px;
    right: 0;

    width: 313px;
    height: 422px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    bottom: -40px;
    right: 0;

    width: 492px;
    height: 662px;
  }
`;

export const Div = styled.div`
  text-align: center;
  @media screen and (min-width: ${`${tablet}px`}) {
    align-self: start;

    width: 269px;
    margin-top: 68px;

    p {
      margin: 0;

      font-size: 16px;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 417px;
    margin-top: 56px;

    P {
      font-size: 24px;
    }
  }
`;

export const IconCross = styled(Cross)`
  @media screen and (min-width: ${`${tablet}px`}) {
    width: 24px;
    height: 24px;

    margin-bottom: 24px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 36px;
    height: 36px;

    margin-bottom: 36px;
  }
`;
