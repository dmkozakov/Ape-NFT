import AccentText from '../../common/AccentText/AccentText';
import { IconArrow } from '../../MindMapSection/MindMap/MindMap.styled';
import * as S from './LearnMoreCard.styled';

function LearnMoreCard() {
  return (
    <S.Link
      href="https://boredapeyachtclub.com/"
      referrerPolicy="no-referrer"
      target="_blank"
    >
      <IconArrow />

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
