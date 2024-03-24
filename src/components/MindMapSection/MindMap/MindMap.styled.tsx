import styled from '@emotion/styled';

import VIEWPORTS from '../../../helpers/viewports';

const { tablet, desktop } = VIEWPORTS;

export const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 48px;

  @media screen and (min-width: ${`${tablet}px`}) {
    padding: 80px 88px 0;

    h2 {
      font-size: 80px;
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    padding: 120px 124px 0;

    h2 {
      font-size: 160px;
      margin-bottom: 80px;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: auto auto;
`;
