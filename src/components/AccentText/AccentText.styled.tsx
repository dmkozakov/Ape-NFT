import styled from '@emotion/styled';
import PALLETTE from '../../helpers/pallette';
import { AccentTextProps } from './AccentText';

export const Text = styled.p`
  font-family: 'Right Grotesk';
  font-size: ${(props: AccentTextProps) => props.fs || '16px'};
  font-weight: ${(props: AccentTextProps) => props.fw || '400'};
  line-height: ${(props: AccentTextProps) => props.lh || '1.18'};
  text-align: ${(props: AccentTextProps) => props.talign};
  margin-top: ${(props: AccentTextProps) => props.mt};
  margin-bottom: ${(props: AccentTextProps) => props.mb};

  color: ${(props: AccentTextProps) => props.color || PALLETTE.textLightMain};

  text-transform: uppercase;
`;
