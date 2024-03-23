import { KeyboardEvent, MouseEvent } from 'react';
import AccentText from '../../common/AccentText/AccentText';
import MainText from '../../common/MainText/MainText';
import * as S from './QuestionsItem.styled';

interface Props {
  num: number;
  question: string;
  answer: string;
  active: boolean;
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLLIElement>) => void;
}

function QuestionsItem({
  num,
  question,
  answer,
  active,
  onKeyPress,
  onClick,
}: Props) {
  return (
    <S.Li
      onClick={onClick}
      onKeyDown={onKeyPress}
      id={num.toString()}
      active={active}
      tabIndex={0}
    >
      <S.Span>[ {num} ]</S.Span>
      <div>
        <AccentText el="h3" fs="20px" mb="10px">
          {question}
        </AccentText>
        <S.Thumb active={active}>
          <MainText fs="12px" lh="1.16">
            {answer}
          </MainText>
        </S.Thumb>
      </div>
    </S.Li>
  );
}

export default QuestionsItem;
