import * as S from './NavMenu.styled';
import IconDiscord from '../../assets/icons/discord.svg?react';
import IconX from '../../assets/icons/x.svg?react';

function NavMenu() {
  return (
    <nav>
      <S.List>
        <li>
          <S.Btn>Menu</S.Btn>
        </li>
        <li>
          <S.Btn>
            <IconDiscord width="16" height="16" />
          </S.Btn>
        </li>
        <li>
          <S.Btn>
            <S.IconYacht width="16" height="16" />
          </S.Btn>
        </li>
        <li>
          <S.Btn>
            <IconX width="16" height="16" />
          </S.Btn>
        </li>
      </S.List>
    </nav>
  );
}

export default NavMenu;
