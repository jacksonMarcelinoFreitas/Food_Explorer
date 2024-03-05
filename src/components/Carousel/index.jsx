import { Left, Right, StyledSwiper } from './style';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Card } from '../Card';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { useNavigate } from 'react-router-dom';

export function Carousel({items, isAdmin}){
  const navigate = useNavigate();

  return(
    <StyledSwiper
      spaceBetween={16}
      slidesPerView={2}
      navigation={true}
      className="mySwiper"
      // centeredSlides={true}
      modules={[Navigation]}
      breakpoints={{
          640: {
              slidesPerView: 3,
              spaceBetween: 16,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 16,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 32,
          },
      }}
    >
      <Left/>
        {items.map(item => (
          <SwiperSlide key={item.id}>
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
          </SwiperSlide>
          ))
        }
      <Right/>
    </StyledSwiper>
  )
}