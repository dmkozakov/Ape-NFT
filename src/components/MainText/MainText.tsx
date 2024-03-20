import { Text } from './MainText.styled';
import { ITextProps } from '../../interfaces/ITextPops';

export type MainTextProps = ITextProps & {
  el?: 'p' | 'span';
};

function MainText({ children, el = 'p', ...attrs }: MainTextProps) {
  return (
    <Text as={el} {...attrs}>
      {children}
    </Text>
  );
}

export default MainText;
