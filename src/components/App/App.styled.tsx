import styled from '@emotion/styled';
import VIEWPORTS from '../../helpers/viewports';

const { tablet, desktop } = VIEWPORTS;

export const Main = styled.main`
  padding-top: 54px;

  @media screen and (min-width: ${`${desktop}px`}) {
    padding-top: 16px;
  }

  .container {
    width: 100%;
    max-width: 480px;

    margin: 0 auto;

    @media screen and (min-width: ${`${tablet}px`}) {
      max-width: var(--tablet);
    }

    @media screen and (min-width: ${`${desktop}px`}) {
      max-width: var(--desktop);
    }
  }
`;
