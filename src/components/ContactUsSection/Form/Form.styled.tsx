import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';
import { InputWithErrors } from './Form';
import MainText from '../../common/MainText/MainText';
import VIEWPORTS from '../../../helpers/viewports';

const { tablet, desktop } = VIEWPORTS;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  width: 216px;

  @media screen and (min-width: ${`${tablet}px`}) {
    width: 248px;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    width: 397px;
    margin-bottom: 24px;
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 48px;
  width: 100%;
  height: 48px;

  border-radius: 8px 0px 0px 8px;

  backdrop-filter: blur(12px);
  background: ${PALLETTE.textDarkMain};

  @media screen and (min-width: ${`${desktop}px`}) {
    max-width: 64px;
    height: 64px;

    border-radius: 12px 0px 0px 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  padding: 12px 24px;

  font-family: 'Messina Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.18;

  border: 1px solid ${PALLETTE.textDarkMain};
  border-radius: 0px 8px 8px 0px;

  text-transform: uppercase;

  color: ${PALLETTE.textFormInactive};
  background-color: transparent;

  &:focus {
    border: 1px solid ${PALLETTE.textLightMain};
    color: ${PALLETTE.textLightMain};
  }

  &:not(:placeholder-shown) {
    border: 1px solid
      ${(props: InputWithErrors) =>
        props.error ? PALLETTE.accent : PALLETTE.textLightMain};

    color: ${(props: InputWithErrors) =>
      props.error ? PALLETTE.accent : PALLETTE.textLightMain};
  }

  &:autofill,
  &:-webkit-autofill {
    color: ${PALLETTE.textFormInactive};
    background-color: transparent;
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    height: 64px;
    padding: 22px 24px;

    border-radius: 0px 12px 12px 0px;
  }
`;

export const Error = styled(MainText)`
  position: absolute;
  right: 0;
  bottom: -12px;

  @media screen and (min-width: ${`${desktop}px`}) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 42px;

  font-family: 'Right Grotesk';
  font-size: 16px;
  font-weight: 900;
  line-height: 1.18;

  border-radius: 8px;
  border: none;
  backdrop-filter: blur(12px);

  text-transform: uppercase;

  transition: color 250ms linear;

  color: ${PALLETTE.textLightMain};
  background-color: ${PALLETTE.accent};

  &:hover,
  &:focus {
    color: ${PALLETTE.textDarkMain};
  }

  @media screen and (min-width: ${`${desktop}px`}) {
    height: 70px;
    font-size: 28px;
  }
`;
