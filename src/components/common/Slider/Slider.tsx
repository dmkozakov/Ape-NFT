import Slider from 'react-slick';
import { Wrapper } from './Slider.styled';

import { ReactNode } from 'react';
import { useMatchMedia } from '../../../hooks/useMatchMedia';

interface Props {
  children: ReactNode;
}

export default function SimpleSlider({ children }: Props) {
  const { isMobile, isDesktop } = useMatchMedia();

  let slidersToShow = 1;

  if (isDesktop) {
    slidersToShow = 4;
  } else if (isMobile) {
    slidersToShow = 1;
  } else {
    slidersToShow = 2;
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidersToShow,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>{children}</Slider>
    </Wrapper>
  );
}
