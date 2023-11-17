import {ReactNode}from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import CardBasic from '../CardBasic/index';

interface PropsCarousel{
    children: ReactNode;
}


const Carousel = (props: PropsCarousel) => {
  return (
    <>      
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
      >
       <div style={{display:"flex"}}>  {props.children}</div>
        
      </ScrollCarousel>
    </>
  );
};

export default Carousel;