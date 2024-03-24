import AccentText from '../../common/AccentText/AccentText';
import QuestionsList from '../QuestionsList/QuestionsList';
import * as S from './Questions.styled';

function Questions() {
  return (
    <S.Section id="faq">
      <AccentText el="h2" fs="44px" lh="0.9" talign="center" mb="16px">
        FAQ
      </AccentText>

      <QuestionsList />
    </S.Section>
  );
}

export default Questions;
