import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';
import Image from '../../common/Image/Image';
import VIEWPORTS from '../../../helpers/viewports';

interface Props {
  active: boolean;
}

const { tablet, desktop } = VIEWPORTS;

export const Li = styled.li`
  position: relative;
  display: flex;
  width: 216px;

  padding: 8px 8px 8px 10px;

  border-radius: 12px;

  background-color: ${(props: Props) =>
    props.active ? PALLETTE.textDarkMain : 'none'};

  transition: color 250ms linear, background-color 500ms linear,
    height 250ms linear;

  h3 {
    color: ${(props: Props) => (props.active ? PALLETTE.accent : 'inherit')};
  }

  span {
    color: ${(props: Props) =>
      props.active ? PALLETTE.textLightMain : PALLETTE.accent};
  }

  p {
    overflow: hidden;
  }

  &:hover h3,
  &:focus h3 {
    color: ${PALLETTE.accent};
  }

  &:hover span,
  &:focus span {
    color: ${PALLETTE.textLightMain};
  }

  @media screen and (min-width: ${`${tablet}px`}) {
    gap: 16px;

    width: 592px;
    padding: 18px 16px 23px 183px;

    border-radius: 16px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    gap: 33px;

    width: 1032px;
    padding: 24px 24px 24px 297px;

    border-radius: 27px;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: ${`${tablet}px`}) {
    gap: 21px;

    h3 {
      font-size: 32px;

      margin-bottom: 12px;
    }
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    gap: 27px;

    h3 {
      font-size: 64px;

      margin-bottom: 36px;
    }
  }
`;

export const Img = styled(Image)`
  position: absolute;
  top: -12px;
  left: 19px;
  width: 148px;
  height: 183px;

  transition: transform 350ms linear, opacity 350ms linear;

  opacity: ${(props: Props) => (props.active ? 1 : 0)};
  transform: ${(props: Props) =>
    props.active ? 'rotate(-16deg)' : 'rotate(0deg)'};

  @media screen and (min-width: ${`${desktop}px`}) {
    top: -16px;
    left: 16px;
    width: 248px;
    height: 282px;

    transform: ${(props: Props) =>
      props.active ? 'rotate(-8deg)' : 'rotate(0deg)'};
  }
`;

export const Span = styled.span`
  width: 100%;
  max-width: 26px;

  font-family: 'Biro Script';
  font-size: 12px;
  font-weight: 400;

  line-height: 1.66;

  color: ${PALLETTE.accent};

  transform: translateY(4px);

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${PALLETTE.textLightMain};
  }

  @media screen and (min-width: ${`${tablet}px`}) {
    max-width: 36px;

    font-size: 16px;
    line-height: 1.69;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    max-width: 54px;

    font-size: 24px;
    line-height: 1.69;
  }
`;

export const Thumb = styled.div`
  display: grid;
  grid-template-rows: ${(props: Props) => (props.active ? '1fr' : '0fr')};

  transition: grid-template-rows 500ms linear;

  @media screen and (min-width: ${`${desktop}px`}) {
    p {
      font-size: 16px;
    }
  }
`;
