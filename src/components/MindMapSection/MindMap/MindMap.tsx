import mindCardContent from '../../../helpers/mindCardContent';
import AccentText from '../../common/AccentText/AccentText';
import MindCard from '../MindCard/MindCard';
import SimpleSlider from '../../common/Slider/Slider';
import * as S from './MindMap.styled';

import LearnMoreCard from '../LearnMoreCard/LearnMoreCard';

function MindMap() {
  return (
    <S.Section className="container">
      <AccentText el="h2" fs="44px" lh="0.9" mb="24px" talign="center">
        Mind Map
      </AccentText>

      <SimpleSlider>
        {mindCardContent.map(card => {
          return (
            <div key={card.title}>
              <MindCard title={card.title} description={card.description} />
            </div>
          );
        })}
        <div>
          <LearnMoreCard />
        </div>
      </SimpleSlider>
    </S.Section>
  );
}

export default MindMap;
