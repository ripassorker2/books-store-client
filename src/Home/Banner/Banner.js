import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './Banner.css'
import img2 from '../../asete/asset 16.png'
import img3 from '../../asete/asset 17.png'

const Banner = () => {
    return (
      <div className="banner">
        <Carousel
          autoPlay={true}
          showIndicators={false}
          showArrows={false}
          
        >
          <div className="first_slide">
            <div className="slide_details">
              <h1>
                GET ALL <span>ORIGINAL AUTO</span> PARTS
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. os
                perferendis minus in hic deserunt qui fugit illo{" "}
              </p>

              <button>Submit</button>
            </div>
            <div className="slide-img">
              <img src={img2} alt="img" />
            </div>
          </div>
          <div className="first_slide">
            <div className="slide_details">
              <h1>
                GET ALL <span>ORIGINAL AUTO</span> PARTS
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. os
                perferendis minus in hic deserunt qui fugit illo{" "}
              </p>

              <button>Submit</button>
            </div>
            <div className="slide-img">
              <img src={img3} alt="img" />
            </div>
          </div>
          <div className="first_slide">
            <div className="slide_details">
              <h1>
                GET ALL <span>ORIGINAL AUTO</span> PARTS
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. os
                perferendis minus in hic deserunt qui fugit illo{" "}
              </p>

              <button>Submit</button>
            </div>
            <div className="slide-img">
              <img src={img2} alt="img" />
            </div>
          </div>
        </Carousel>
      </div>
    );
};
// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
export default Banner;