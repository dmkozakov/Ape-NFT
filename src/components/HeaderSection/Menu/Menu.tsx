import { SyntheticEvent } from 'react';
import * as S from './Menu.styled';
interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}
function Menu({ open, setOpen }: Props) {
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
    <S.Nav open={open}>
      <S.Ul onClick={handleClick}>
        <li>
          <S.Link href="#about" tabIndex={open ? 0 : -1}>
            <S.Title>About</S.Title>
          </S.Link>
        </li>
        <li>
          <S.Link href="#mind-map" tabIndex={open ? 0 : -1}>
            <S.Title>M-Map</S.Title>
          </S.Link>
        </li>
        <li>
          <S.Link href="#faq" tabIndex={open ? 0 : -1}>
            <S.Title>FAQ</S.Title>
          </S.Link>
        </li>
        <li>
          <S.Link href="#arts" tabIndex={open ? 0 : -1}>
            <S.Title>Arts</S.Title>
          </S.Link>
        </li>
        <li>
          <S.Link href="#mint" tabIndex={open ? 0 : -1}>
            <S.Title fs="24px" lh="1.2" talign="center">
              Mint
            </S.Title>
          </S.Link>
        </li>
      </S.Ul>
    </S.Nav>
  );
}

export default Menu;
