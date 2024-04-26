import React from 'react';
import './testimonias.css';
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const data = [
  {
    avatar: AVATAR1,
    name: 'Chika Alozie',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendoptio beatacommodi quae placeat tempore animi mus iure, voluptates quo! Eius quo assumendavoluptate sedaliquid harum incidunt alias nesciunt',
  },
  {
    avatar: AVATAR2,
    name: 'David Onyeka',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendoptio beatacommodi quae placeat tempore animi mus iure, voluptates quo! Eius quo assumendavoluptate sedaliquid harum incidunt alias nesciunt',
  },
  {
    avatar: AVATAR3,
    name: 'Damilola Edwin',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendoptio beatacommodi quae placeat tempore animi mus iure, voluptates quo! Eius quo assumendavoluptate sedaliquid harum incidunt alias nesciunt',
  },
  {
    avatar: AVATAR4,
    name: 'Barine Edwin',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendoptio beatacommodi quae placeat tempore animi mus iure, voluptates quo! Eius quo assumendavoluptate sedaliquid harum incidunt alias nesciunt',
  }

]

const Testimonias = () => {
  return (
    <section id='testimonias'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"     
        // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} >
        {
          data.map(({avatar, name, review},index) =>{
            return(
              <SwiperSlide key={index} className='testimonials'>
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          }

          )
        }
      </Swiper>
    
    </section>
  )
}

export default Testimonias