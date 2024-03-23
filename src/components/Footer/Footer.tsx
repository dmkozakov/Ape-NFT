import MainText from '../common/MainText/MainText';
import * as S from './Footer.styled';

function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <MainText fs="12px" lh="1.16" talign="center">
          © Yacht ape 2024 all rights reserved
        </MainText>
      </S.Container>
    </S.Footer>
  );
}

export default Footer;
