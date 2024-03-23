import PALLETTE from '../../../helpers/pallette';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NavMenu from '../NavMenu/NavMenu';
import * as S from './Header.styled';

function Header() {
  const mobile = true;

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Link href="*" mobile={mobile}>
            <S.Logo
              fill={PALLETTE.textDarkMain}
              width="48"
              height="32"
              mobile={mobile}
            />
          </S.Link>

          <NavMenu />
        </S.Header>
      </S.Wrapper>
      <BurgerMenu />
    </>
  );
}

export default Header;
