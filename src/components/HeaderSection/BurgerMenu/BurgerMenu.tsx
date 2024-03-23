import * as S from './BurgerMenu.styled';

function BurgerMenu() {
  return (
    <S.Container>
      <nav>
        <S.Ul>
          <li>
            <S.Link href="">
              <S.Title>About</S.Title>
            </S.Link>
          </li>
          <li>
            <S.Link href="">
              <S.Title>Mind-Map</S.Title>
            </S.Link>
          </li>
          <li>
            <S.Link href="">
              <S.Title>FAQ</S.Title>
            </S.Link>
          </li>
          <li>
            <S.Link href="">
              <S.Title>Arts</S.Title>
            </S.Link>
          </li>
          <li>
            <S.Link href="">
              <S.Title fs="24px" lh="1.2" talign="center">
                Mint
              </S.Title>
            </S.Link>
          </li>
        </S.Ul>
      </nav>

      <S.Copyright fs="12px" lh="1.16" talign="center">
        © Yacht ape 2024 all rights reserved
      </S.Copyright>
    </S.Container>
  );
}

export default BurgerMenu;
