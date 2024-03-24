import styled from '@emotion/styled';
import VIEWPORTS from '../../helpers/viewports';

const { tablet, desktop } = VIEWPORTS;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 60px;
  padding-bottom: 24px;

  @media screen and (min-width: ${`${tablet}px`}) {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    padding-top: 120px;
  }
`;

export const Container = styled.div`
  width: 216px;

  @media screen and (min-width: ${`${tablet}px`}) {
    width: 273px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 363px;

    p {
      font-size: 16px;
    }
  }
`;
