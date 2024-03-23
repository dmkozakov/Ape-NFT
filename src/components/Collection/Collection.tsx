import imageCollectionContent from '../../helpers/imageCollectionContent';
import AccentText from '../common/AccentText/AccentText';
import Image from '../common/Image/Image';
import SimpleSlider from '../common/Slider/Slider';
import * as S from './Collection.styled';

function Collection() {
  return (
    <S.Section>
      <AccentText el="h2" fs="44px" lh="0.9" talign="center" mb="24px">
        Collection
      </AccentText>
      <SimpleSlider>
        {imageCollectionContent.map(img => (
          <div key={img.src}>
            <Image src={img.src} alt={img.alt} width="216px" height="256px" />
          </div>
        ))}
      </SimpleSlider>
    </S.Section>
  );
}

export default Collection;
