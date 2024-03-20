import AccentText from '../AccentText/AccentText';
import MainText from '../MainText/MainText';
import * as S from './Mindcard.styled';

interface Props {
  title: string;
  description: string;
}

function MindCard({ title, description }: Props) {
  return (
    <S.Card>
      <MainText fs="12px" lh="1.16">
        {description}
      </MainText>
      <AccentText el="h2" fs="32px">
        {title}
      </AccentText>
    </S.Card>
  );
}

export default MindCard;
