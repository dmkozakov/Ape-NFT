import styled from '@emotion/styled';
import VIEWPORTS from '../../helpers/viewports';
import Image from '../common/Image/Image';

const { tablet, desktop } = VIEWPORTS;

export const Section = styled.section`
  padding-top: 52px;

  img {
    padding-left: 1px;
  }

  @media screen and (min-width: ${`${tablet}px`}) {
    padding-top: 80px;

    h2 {
      margin-bottom: 40px;

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

export const ImageCard = styled(Image)`
  width: 216px;
  height: 256px;

  @media screen and (min-width: ${`${tablet}px`}) {
    width: 284px;
    height: 336px;

    margin-right: 24px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 240px;
    height: 280px;
  }
`;
