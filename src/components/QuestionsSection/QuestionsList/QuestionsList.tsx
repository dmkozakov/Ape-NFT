import questionContent from '../../../helpers/questionsContent';
import * as S from './QuestionsList.styled';
import QuestionsItem from '../QuestionsItem/QuestionsItem';
import { KeyboardEvent, MouseEvent, useState } from 'react';

function QuestionsList() {
  const [activeNum, setActiveNum] = useState(1);

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    setActiveNum(Number(e.currentTarget.id));
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.code === 'Enter') {
      setActiveNum(Number(e.currentTarget.id));
    }
  };

  return (
    <S.Ul>
      {questionContent.map((item, idx) => {
        let isActive = false;

        if (activeNum === idx + 1) {
          isActive = true;
        }

        return (
          <QuestionsItem
            key={item.answer}
            imgsrc={item.img}
            imgalt={item.alt}
            active={isActive}
            num={idx + 1}
            question={item.question}
            answer={item.answer}
            onClick={handleClick}
            onKeyPress={handleKeyPress}
          />
        );
      })}
    </S.Ul>
  );
}

export default QuestionsList;
