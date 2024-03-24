import styled from '@emotion/styled';
import VIEWPORTS from '../../../helpers/viewports';

import Cross from '../../../assets/icons/cross.svg?react';
import MainText from '../../common/MainText/MainText';

const { tablet, desktop } = VIEWPORTS;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${`${tablet}px`}) {
    padding-top: 120px;

    h2 {
      font-size: 80px;

      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    padding-top: 160px;

    h2 {
      font-size: 120px;

      margin-bottom: 80px;
    }
  }
`;

export const IconCross = styled(Cross)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: ${`${tablet}px`}) {
    width: 36px;
    height: 36px;
  }
`;

export const Text = styled(MainText)`
  width: 216px;

  @media screen and (min-width: ${`${tablet}px`}) {
    margin-top: 24px;
    margin-bottom: 24px;

    width: 397px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    margin-top: 40px;
    margin-bottom: 40px;

    width: 581px;

    font-size: 24px;
  }
`;
