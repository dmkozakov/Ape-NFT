import * as S from './NavMenu.styled';
import IconDiscord from '../../../assets/icons/discord.svg?react';
import IconX from '../../../assets/icons/x.svg?react';

function NavMenu() {
  const mobile = true;

  return (
    <nav>
      <S.List>
        <li>
          <S.Btn mobile={mobile}>Menu</S.Btn>
        </li>
        <li>
          <S.Link
            href="https://discord.com/invite/bascdao"
            target="_blank"
            referrerPolicy="no-referrer"
            mobile={mobile}
          >
            <IconDiscord width="16" height="16" />
          </S.Link>
        </li>
        <li>
          <S.Link
            href="https://boredapeyachtclub.com/"
            target="_blank"
            referrerPolicy="no-referrer"
            mobile={mobile}
          >
            <S.IconYacht width="16" height="16" />
          </S.Link>
        </li>
        <li>
          <S.Link
            href="https://twitter.com/BoredApeYC"
            target="_blank"
            referrerPolicy="no-referrer"
            mobile={mobile}
          >
            <IconX width="16" height="16" />
          </S.Link>
        </li>
      </S.List>
    </nav>
  );
}

export default NavMenu;
