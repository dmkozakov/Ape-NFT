import PALLETTE from '../../helpers/pallette';
import AccentText from '../AccentText/AccentText';
import MainText from '../MainText/MainText';
import Image from '../Image/Image';
import * as S from './About.styled';

import IconCross from '../../assets/icons/cross.svg?react';
import aboutApe from '../../assets/images/aboutApe.png';

function About() {
  return (
    <S.Section className="container">
      <S.Container>
        <AccentText el="p" fs="40px">
          A story that started with{' '}
          <AccentText el="span" fs="40px" color={PALLETTE.accent}>
            one simple
            <AccentText
              el="span"
              fs="40px"
              color={PALLETTE.accent}
              display="block"
            >
              ape
            </AccentText>
          </AccentText>
        </AccentText>

        <MainText talign="right" mt="16px" mb="36px">
          <MainText el="span" talign="right" display="block">
            Who got{' '}
          </MainText>
          fed up with boring and hypocritic commonplace this is how the idea of
          escaping and dynamic journey on the yacht
        </MainText>

        <IconCross fill={PALLETTE.textLightMain} width={24} height={24} />

        <MainText fs="12px" lh="1.16" talign="center" mt="16px" mb="40px">
          Each artwork in the collection tells a story of one journey. arts are
          randomly generated by users
        </MainText>

        <Image
          src={aboutApe}
          alt="A cool ape with glasses and a cap"
          width="216px"
          height="292px"
        />
      </S.Container>
    </S.Section>
  );
}

export default About;