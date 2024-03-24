import AccentText from '../../common/AccentText/AccentText';
import * as S from './LearnMoreCard.styled';

function LearnMoreCard() {
  return (
    <S.Link
      href="https://boredapeyachtclub.com/"
      referrerPolicy="no-referrer"
      target="_blank"
    >
      <S.IconArrow />

      <AccentText el="h3" fs="32px">
        Learn
        <AccentText el="span" fs="32px" display="block">
          more
        </AccentText>
        in mind map
      </AccentText>
    </S.Link>
  );
}

export default LearnMoreCard;
