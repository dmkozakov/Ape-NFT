import * as S from './NavMenu.styled';

interface Props {
  open: boolean;
  isMobile: boolean;
  onMenuClick: () => void;
}

function NavMenu({ open, isMobile, onMenuClick }: Props) {
  return (
    <nav>
      <S.List>
        <li>
          <S.Btn mobile={open && isMobile} open={open} onClick={onMenuClick}>
            {open ? 'Close' : 'Menu'}
          </S.Btn>
        </li>
        <li>
          <S.Link
            href="https://discord.com/invite/bascdao"
            target="_blank"
            referrerPolicy="no-referrer"
            mobile={open && isMobile}
          >
            <S.IconDiscord />
          </S.Link>
        </li>
        <li>
          <S.Link
            href="https://boredapeyachtclub.com/"
            target="_blank"
            referrerPolicy="no-referrer"
            mobile={open && isMobile}
          >
            <S.IconYacht />
          </S.Link>
        </li>
        <li>
          <S.Link
            href="https://twitter.com/BoredApeYC"
            target="_blank"
            referrerPolicy="no-referrer"
            mobile={open && isMobile}
          >
            <S.IconX />
          </S.Link>
        </li>
      </S.List>
    </nav>
  );
}

export default NavMenu;
