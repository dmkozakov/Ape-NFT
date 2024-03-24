import { KeyboardEvent, MouseEvent } from 'react';
import AccentText from '../../common/AccentText/AccentText';
import MainText from '../../common/MainText/MainText';
import * as S from './QuestionsItem.styled';
import { useMatchMedia } from '../../../hooks/useMatchMedia';

interface Props {
  imgsrc: string;
  imgalt: string;
  num: number;
  question: string;
  answer: string;
  active: boolean;
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLLIElement>) => void;
}

function QuestionsItem({
  imgsrc,
  imgalt,
  num,
  question,
  answer,
  active,
  onKeyPress,
  onClick,
}: Props) {
  const { isMobile } = useMatchMedia();

  return (
    <S.Li
      onClick={onClick}
      onKeyDown={onKeyPress}
      id={num.toString()}
      active={active}
      tabIndex={0}
    >
      {!isMobile && <S.Img src={imgsrc} alt={imgalt} active={active} />}

      <S.Div>
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
      </S.Div>
    </S.Li>
  );
}

export default QuestionsItem;
