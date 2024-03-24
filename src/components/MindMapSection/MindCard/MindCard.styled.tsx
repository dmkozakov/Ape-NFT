import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';
import VIEWPORTS from '../../../helpers/viewports';

const { tablet, desktop } = VIEWPORTS;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 216px;
  height: 242px;

  margin-left: 1px;
  padding: 24px 12px;

  border-radius: 12px;

  color: ${PALLETTE.textLightMain};
  background-color: ${PALLETTE.textDarkMain};

  @media screen and (min-width: ${`${tablet}px`}) {
    border-radius: 16px;
    padding: 24px;
    width: 284px;
    height: 242px;

    p {
      align-self: end;

      width: 128px;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    border-radius: 24px;
    width: 504px;
    height: 480px;

    h3 {
      font-size: 64px;
    }

    p {
      width: 228px;

      font-size: 24px;
    }
  }
`;
