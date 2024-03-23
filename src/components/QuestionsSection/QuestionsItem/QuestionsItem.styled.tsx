import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';

interface Props {
  active: boolean;
}

export const Li = styled.li`
  display: flex;
  gap: 8px;
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
`;

export const Thumb = styled.div`
  display: grid;
  grid-template-rows: ${(props: Props) => (props.active ? '1fr' : '0fr')};

  transition: grid-template-rows 500ms linear;
`;
