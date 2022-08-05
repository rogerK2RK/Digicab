import Img_slide01 from "../assets/Img_slider_01.png"
import Img_slide02 from "../assets/Img_slider_02.png"
import Img_slide03 from "../assets/Img_slider_03.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Slide.css';


function Slide(){

    return(
        <Carousel controls transitionTime="crossfade">
            <div>
                <img className='img-slide' alt='slide 1'src={Img_slide01} />
            </div>
            <div>
                <img className='img-slide' alt='slide 2'src={Img_slide02} />
            </div>
            <div>
                <img className='img-slide' alt='slide 3'src={Img_slide03} />
            </div>
        </Carousel>
    );

}

export default Slide;