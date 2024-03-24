import { useEffect, useState } from 'react';
import PALLETTE from '../../../helpers/pallette';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NavMenu from '../NavMenu/NavMenu';
import * as S from './Header.styled';
import Menu from '../Menu/Menu';
import { useMatchMedia } from '../../../hooks/useMatchMedia';

function Header() {
  const { isMobile } = useMatchMedia();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open, isMobile]);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <S.Header>
        <S.Container>
          <S.Link href="*" mobile={open && isMobile}>
            <S.Logo fill={PALLETTE.textDarkMain} width="48" height="32" />
          </S.Link>

          <NavMenu onMenuClick={toggleMenu} open={open} isMobile={isMobile} />

          {!isMobile && <Menu open={open} setOpen={setOpen} />}
        </S.Container>
      </S.Header>

      {isMobile && <BurgerMenu open={open} setOpen={setOpen} />}
    </>
  );
}

export default Header;
