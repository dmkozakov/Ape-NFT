import imageCollectionContent from '../../helpers/imageCollectionContent';
import AccentText from '../common/AccentText/AccentText';
import SimpleSlider from '../common/Slider/Slider';
import * as S from './Collection.styled';

function Collection() {
  return (
    <S.Section id="arts">
      <AccentText el="h2" fs="44px" lh="0.9" talign="center" mb="24px">
        Collection
      </AccentText>

      <SimpleSlider>
        {imageCollectionContent.map(img => (
          <div key={img.src}>
            <S.ImageCard src={img.src} alt={img.alt} />
          </div>
        ))}
      </SimpleSlider>
    </S.Section>
  );
}

export default Collection;
