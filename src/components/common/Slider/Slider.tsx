import Slider from 'react-slick';
import { Wrapper } from './Slider.styled';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SimpleSlider({ children }: Props) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>{children}</Slider>
    </Wrapper>
  );
}
