import { Thumb } from './Image.styled';

interface Props {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export type ThumbProps = Pick<Props, 'width' | 'height'>;

export default function Image({
  src,
  alt,
  width,
  height = 'auto',
  ...attrs
}: Props) {
  return (
    <Thumb width={width} height={height} {...attrs}>
      <img src={src} alt={alt} />
    </Thumb>
  );
}
