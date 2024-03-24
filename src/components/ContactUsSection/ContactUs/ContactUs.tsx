import AccentText from '../../common/AccentText/AccentText';
import * as S from './ContactUs.styled';

import PALLETTE from '../../../helpers/pallette';
import Form from '../Form/Form';

function ContactUs() {
  return (
    <S.Section id="mint">
      <S.Container className="container">
        <AccentText el="h2" fs="44px" lh="0.9" mb="24px" talign="center">
          Are you in?
        </AccentText>

        <S.IconCross fill={PALLETTE.textLightMain} />

        <S.Text fs="16px" lh="1.18" mt="16px" mb="16px" talign="center">
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </S.Text>

        <Form />
      </S.Container>
    </S.Section>
  );
}

export default ContactUs;
