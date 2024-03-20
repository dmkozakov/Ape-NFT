import Marquee from 'react-double-marquee';
import AccentText from '../AccentText/AccentText';
import * as S from './Banner.styled';

function Banner() {
  return (
    <S.Banner>
      <Marquee
        direction="left"
        delay={500}
        childMargin={0}
        style={{ display: 'flex', alignItems: 'baseline' }}
      >
        <AccentText el="span" fs="36px">
          Destroy stereotypes
        </AccentText>

        <S.Icon />

        <AccentText el="span" fs="36px">
          Have no limits
        </AccentText>

        <S.Icon />

        <AccentText el="span" fs="36px">
          Break rules
        </AccentText>

        <S.Icon />
      </Marquee>
    </S.Banner>
  );
}

export default Banner;
