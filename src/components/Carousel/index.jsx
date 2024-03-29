import { SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { splideOptions } from '../../styles/splideConfig'
import { Left, Right, StyledSplide } from './style';
import '@splidejs/splide/css/sea-green';
import { Card } from '../Card';

export function Carousel({items, isAdmin}){
  return(
    <>
    <StyledSplide
      hasTrack={ false } 
      aria-label="..."
      options={ splideOptions }
    >
      <Left/>
      <SplideTrack>
        {items.map(item => (
          <SplideSlide key={item.id}>
            <Card
              isAdmin={isAdmin}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
              isLiked={item.isLiked}
              orders={item.orders}
              id={item.id}
            />
          </SplideSlide>
        ))
        }
      </SplideTrack>
      <Right/>
      <div className="splide__arrows">
        <IoIosArrowBack className="splide__arrow splide__arrow--prev"/>
        <IoIosArrowForward className="splide__arrow splide__arrow--next"/>
      </div>
    </StyledSplide>
    </>
  )
}
