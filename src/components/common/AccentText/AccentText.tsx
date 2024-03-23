import { Text } from './AccentText.styled';
import { ITextProps } from '../../../interfaces/ITextPops';

type Elements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type AccentTextProps = ITextProps & {
  el?: Elements;
  ls?: string;
};

function AccentText({ children, el = 'p', ...attrs }: AccentTextProps) {
  return (
    <Text as={el} {...attrs}>
      {children}
    </Text>
  );
}

export default AccentText;
