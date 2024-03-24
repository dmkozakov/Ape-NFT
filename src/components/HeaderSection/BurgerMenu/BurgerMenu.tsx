import { SyntheticEvent } from 'react';
import * as S from './BurgerMenu.styled';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

function BurgerMenu({ open, setOpen }: Props) {
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setOpen(false);
    const target = e.target as HTMLAnchorElement;
    const id = target.getAttribute('href')?.replace('#', '');
    const element = document.getElementById(String(id));
    console.log(target);

    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <S.Container mobile={open}>
      <S.Nav>
        <S.Ul onClick={handleClick}>
          <li>
            <S.Link href="#about">
              <S.Title>About</S.Title>
            </S.Link>
          </li>
          <li>
            <S.Link href="#mind-map">
              <S.Title>Mind-Map</S.Title>
            </S.Link>
          </li>
          <li>
            <S.Link href="#faq">
              <S.Title>FAQ</S.Title>
            </S.Link>
          </li>
          <li>
            <S.Link href="#arts">
              <S.Title>Arts</S.Title>
            </S.Link>
          </li>
          <li>
            <S.Link href="#mint">
              <S.Title fs="24px" lh="1.2" talign="center">
                Mint
              </S.Title>
            </S.Link>
          </li>
        </S.Ul>
      </S.Nav>

      <S.Copyright fs="12px" lh="1.16" talign="center">
        © Yacht ape 2024 all rights reserved
      </S.Copyright>
    </S.Container>
  );
}

export default BurgerMenu;
