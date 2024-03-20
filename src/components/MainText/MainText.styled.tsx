import styled from '@emotion/styled';
import { MainTextProps } from './MainText';
import PALLETTE from '../../helpers/pallette';

export const Text = styled.p`
  display: ${(props: MainTextProps) => props.display};

  font-family: 'Messina Sans';
  font-size: ${(props: MainTextProps) => props.fs || '16px'};
  font-weight: ${(props: MainTextProps) => props.fw || '400'};
  line-height: ${(props: MainTextProps) => props.lh || '1.18'};
  text-align: ${(props: MainTextProps) => props.talign};
  margin-top: ${(props: MainTextProps) => props.mt};
  margin-bottom: ${(props: MainTextProps) => props.mb};

  color: ${(props: MainTextProps) => props.color || PALLETTE.textLightMain};

  text-transform: uppercase;
`;
