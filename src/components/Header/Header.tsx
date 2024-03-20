import PALLETTE from '../../helpers/pallette';
import NavMenu from '../NavMenu/NavMenu';
import * as S from './Header.styled';

function Header() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo fill={PALLETTE.textDarkMain} width="48" height="32" />
        <NavMenu />
      </S.Header>
    </S.Wrapper>
  );
}

export default Header;
