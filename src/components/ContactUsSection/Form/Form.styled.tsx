import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';
import { InputWithErrors } from './Form';
import MainText from '../../common/MainText/MainText';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  /* width: 216px; */
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  width: 216px;
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
`;

// export const Box = styled.div`
//   display: flex;
//   align-items: center;
// `;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  padding: 24px 12px;

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
`;

export const Error = styled(MainText)`
  position: absolute;
  right: 0;
  bottom: -12px;
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
`;
