import AccentText from '../AccentText/AccentText';
import SimpleSlider from '../Slider/Slider';
import * as S from './MindMap.styled';

function MindMap() {
  return (
    <S.Section className="container">
      <AccentText el="h2" fs="44px" lh="0.9" mb="24px" talign="center">
        Mind Map
      </AccentText>
      <SimpleSlider />
    </S.Section>
  );
}

export default MindMap;
