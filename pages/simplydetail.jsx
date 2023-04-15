import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/simplydetail_slide1.jpg";
import slide2 from "../assets/simplydetail_slide2.jpg";
import slide3 from "../assets/simplydetail_slide3.jpg";
import slide4 from "../assets/simplydetail_slide4.jpg";
import Image from "next/image";

function simplydetail() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    arrows: true,
  };
  return (
    <section id="simplydetail">
      <div className="container">
        <div className="row">
            <h2 className="project__title">Simply Detail</h2>
            <p>Simply Detail is a website that I built from scratch using NextJS. It was designed for a car detailing service based in Sydney. The website has great page routing, cool animations, and a modern web design that looks great on all devices. It even has a working contact form so customers can easily reach out. Overall, Simply Detail is a fantastic example of modern web development and design, and it's a great way for the car detailing service to connect with their customers online.</p>
          <Slider {...settings}>
            <div>
              <figure className="slider__wrapper">
                <Image src={slide1} height={600} />
              </figure>
            </div>
            <div>
              <figure className="slider__wrapper">
                <Image src={slide2} height={600} />
              </figure>
            </div>
            <div>
              <figure className="slider__wrapper">
                <Image src={slide3} height={600} />
              </figure>
            </div>
            <div>
              <figure className="slider__wrapper">
                <Image src={slide4} height={600} />
              </figure>
            </div>
            
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default simplydetail;
