import { Heading, HeroBtn, HeroCard, HeroDescr } from './Hero.styled';

import heroApe from '../../assets/images/heroApe.png';
import Image from '../Image/Image';

function Hero() {
  return (
    <HeroCard>
      <Heading>
        <p>diD yOu seE iT ?</p>
        <h1>YACHT APES</h1>
        <p>Apes aRe eveRywhere</p>
      </Heading>
      <Image
        src={heroApe}
        alt="A picture of an ape with glasses and a jacket"
        width="216px"
        height="284px"
      />
      <HeroBtn type="button">
        <span>MEET APES</span>
      </HeroBtn>
      <HeroDescr>
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </HeroDescr>
    </HeroCard>
  );
}

export default Hero;
