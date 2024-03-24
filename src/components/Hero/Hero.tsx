import * as S from './Hero.styled';

import heroApe from '../../assets/images/heroApe.png';
import AccentText from '../common/AccentText/AccentText';
import PALLETTE from '../../helpers/pallette';

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
              ls="0.01em"
              color={PALLETTE.textDarkMain}
            >
              Yacht <span>apes</span>
            </AccentText>
            <p>Apes aRe eveRywhere</p>
          </S.Heading>

          <S.HeroImage
            src={heroApe}
            alt="A picture of an ape with glasses and a jacket"
          />

          <S.Div>
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

            <S.HeroDescr
              fs="12px"
              lh="1.16"
              mt="8px"
              talign="center"
              color={PALLETTE.textDarkMain}
            >
              <span>Yacht Ape is a</span> collection of unique digital apes that
              you can own in NFT format
            </S.HeroDescr>
          </S.Div>
        </S.Container>
      </S.HeroCard>
    </S.Wrapper>
  );
}

export default Hero;
