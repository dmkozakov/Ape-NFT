import * as S from './Hero.styled';

import heroApe from '../../assets/images/heroApe.png';
import Image from '../common/Image/Image';
import AccentText from '../common/AccentText/AccentText';
import PALLETTE from '../../helpers/pallette';
import MainText from '../common/MainText/MainText';

function Hero() {
  return (
    <S.Wrapper className="container">
      <S.HeroCard>
        <S.Container>
          <S.Heading>
            <p>diD yOu seE iT ?</p>
            <AccentText
              el="h1"
              fs="44px"
              ls="0.01"
              color={PALLETTE.textDarkMain}
            >
              Yacht apes
            </AccentText>
            <p>Apes aRe eveRywhere</p>
          </S.Heading>
          <Image
            src={heroApe}
            alt="A picture of an ape with glasses and a jacket"
            width="216px"
            height="284px"
          />
          <S.HeroBtn type="button">
            <AccentText
              el="span"
              fs="16px"
              lh="1.18"
              color={PALLETTE.textDarkMain}
            >
              Meet apes
            </AccentText>
          </S.HeroBtn>

          <MainText
            fs="12px"
            lh="1.16"
            mt="8px"
            talign="center"
            color={PALLETTE.textDarkMain}
          >
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </MainText>
        </S.Container>
      </S.HeroCard>
    </S.Wrapper>
  );
}

export default Hero;
