import styled from '@emotion/styled';
import PALLETTE from '../../../helpers/pallette';
import { AccentTextProps } from './AccentText';

export const Text = styled.p`
  display: ${(props: AccentTextProps) => props.display};
  font-family: 'Right Grotesk';
  font-size: ${(props: AccentTextProps) => props.fs || '20px'};
  font-weight: ${(props: AccentTextProps) => props.fw || '900'};
  line-height: ${(props: AccentTextProps) => props.lh || '1'};
  text-align: ${(props: AccentTextProps) => props.talign};
  margin-top: ${(props: AccentTextProps) => props.mt};
  margin-bottom: ${(props: AccentTextProps) => props.mb};
  letter-spacing: ${(props: AccentTextProps) => props.ls};

  color: ${(props: AccentTextProps) => props.color || PALLETTE.textLightMain};

  text-transform: uppercase;

  transition: color 250ms linear;
`;
