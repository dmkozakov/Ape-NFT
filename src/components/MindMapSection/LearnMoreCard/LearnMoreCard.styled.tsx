import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';
import VIEWPORTS from '../../../helpers/viewports';
import Icon from '../../../assets/icons/up-left-arrow.svg?react';

const { tablet, desktop } = VIEWPORTS;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 216px;
  height: 242px;

  margin-left: 1px;
  padding: 24px 12px;

  border-radius: 12px;
  text-decoration: none;

  background-color: ${PALLETTE.accent};

  &:hover svg,
  &:focus svg {
    transform: translate(8px, -8px);
  }

  @media screen and (min-width: ${`${tablet}px`}) {
    width: 284px;
    height: 242px;
    padding: 24px;

    border-radius: 16px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    border-radius: 24px;
    width: 504px;
    height: 480px;

    h3 {
      font-size: 64px;

      span {
        font-size: 64px;
      }
    }

    p {
      width: 228px;

      font-size: 24px;
    }
  }
`;

export const IconArrow = styled(Icon)`
  align-self: flex-end;

  width: 16px;
  height: 16px;

  margin-right: 8px;

  fill: ${PALLETTE.textLightMain};

  transition: transform 250ms linear;

  @media screen and (min-width: ${`${tablet}px`}) {
    margin-top: 8px;

    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 40px;
    height: 40px;
  }
`;
