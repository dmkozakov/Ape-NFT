// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { Wrapper } from './Slider.styled';
import MindCard from '../MindCard/MindCard';

import mindCardContent from '../../helpers/mindCardContent';

export default function SimpleSlider() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {mindCardContent.map(card => {
          return (
            <div key={card.title}>
              <MindCard title={card.title} description={card.description} />
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
}
