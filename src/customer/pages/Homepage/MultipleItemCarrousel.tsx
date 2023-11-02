import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topMeals } from "../../../types/types";
import CarrouselItem from "./CarrouselItem";


const MultipleItemCarrousel = () => {

   
        const settings = {
          dots: false,
          infinite: true,
          speed: 5000,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows:false,
          autoplay:true,
          autoplaySpeed:5000,
          cssEase: "linear",
          pauseOnHover: true
          
        };
        return (
         <div className="w-[100%]">
            <Slider {...settings}>
                {topMeals.map((item:any)=>
                <CarrouselItem image={item.image} title={item.title} />
                )}
            </Slider>

            
         </div>
        );
      
}

export default MultipleItemCarrousel