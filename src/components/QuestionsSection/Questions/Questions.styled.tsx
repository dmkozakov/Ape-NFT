import styled from '@emotion/styled';
import VIEWPORTS from '../../../helpers/viewports';

const { tablet, desktop } = VIEWPORTS;

export const Section = styled.section`
  padding-top: 60px;

  @media screen and (min-width: ${`${tablet}px`}) {
    padding-top: 80px;

    h2 {
      margin-bottom: 48px;

      font-size: 80px;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    padding-top: 120px;

    h2 {
      margin-bottom: 80px;

      font-size: 120px;
    }
  }
`;
