import AccentText from '../../common/AccentText/AccentText';
import MainText from '../../common/MainText/MainText';
import * as S from './ContactUs.styled';

import IconCross from '../../../assets/icons/cross.svg?react';
import PALLETTE from '../../../helpers/pallette';
import Form from '../Form/Form';

function ContactUs() {
  return (
    <S.Section>
      <S.Container>
        <AccentText el="h2" fs="44px" lh="0.9" mb="24px" talign="center">
          Are you in?
        </AccentText>

        <IconCross fill={PALLETTE.textLightMain} width={24} height={24} />

        <MainText fs="16px" lh="1.18" mt="16px" mb="16px" talign="center">
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </MainText>

        <Form />
      </S.Container>
    </S.Section>
  );
}

export default ContactUs;
