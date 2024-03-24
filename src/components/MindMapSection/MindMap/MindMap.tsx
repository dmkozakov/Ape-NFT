import mindCardContent from '../../../helpers/mindCardContent';
import AccentText from '../../common/AccentText/AccentText';
import MindCard from '../MindCard/MindCard';
import SimpleSlider from '../../common/Slider/Slider';
import * as S from './MindMap.styled';

import LearnMoreCard from '../LearnMoreCard/LearnMoreCard';
import { useMatchMedia } from '../../../hooks/useMatchMedia';

function MindMap() {
  const { isMobile } = useMatchMedia();

  return (
    <S.Section className="container" id="mind-map">
      <AccentText el="h2" fs="44px" lh="0.9" mb="24px" talign="center">
        Mind Map
      </AccentText>

      {isMobile && (
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
      )}

      {!isMobile && (
        <S.List>
          {mindCardContent.map(card => {
            return (
              <li key={card.title}>
                <MindCard title={card.title} description={card.description} />
              </li>
            );
          })}
          <li>
            <LearnMoreCard />
          </li>
        </S.List>
      )}
    </S.Section>
  );
}

export default MindMap;
