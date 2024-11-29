import heroImage from '../utilities/image/slider.png';
import heroBg from '../utilities/image/bg.png';
import heroBg1 from '../utilities/image/slider-haf-img.png';
import vegetable from '../utilities/image/vegetable.png';
import Slider from 'react-slick';
function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <section className="slider-container mb-6 lg:mb-4">
      <Slider {...settings}>
        <div>
          <div className="grid h-fit grid-cols-1 place-items-center gap-2 bg-cover bg-center bg-no-repeat sm:h-screen sm:gap-0 lg:grid-cols-[40rem_auto]">
            <div>
              <h1 className="mb-3 w-52 bg-[#804507] font-serif text-lg text-white opacity-80">
                TIME TO MEET YOURS
              </h1>
              <p className="font-dois text-2xl sm:text-3xl">
                Mens Clark Brown Suede
                <br />
              </p>
              <span className="inline-block text-4xl font-semibold text-[#39230e] sm:text-5xl">
                Chelsea Boots
              </span>
              <br />
              <button className="mb-3 mt-2 h-10 w-32 rounded-md bg-[#e18128] text-[#221509] shadow-sm">
                Order Now
              </button>
            </div>

            <div>
              <img src={heroBg1} alt="hero_Image" />
            </div>
          </div>
        </div>
        <div>
          <div
            className="grid h-fit grid-cols-1 gap-2 bg-contain bg-center bg-no-repeat sm:h-screen sm:gap-0 lg:grid-cols-[40rem_1fr] lg:place-items-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="ml-7">
              <h1 className="font-dancing text-3xl text-cyan-900 opacity-70 lg:text-6xl">
                <span className="text-5xl lg:text-8xl">G</span>et Discount on
                Fresh
                <br />
                Vegetables & Fruits,
              </h1>
              <button className="mt-2 h-10 w-32 rounded-md bg-lime-300 text-gray-700 shadow-sm">
                Order Now
              </button>
            </div>

            <div>
              <img src={heroImage} alt="hero_Image" />
            </div>
          </div>
        </div>
        <div>
          <div
            className="grid h-fit grid-cols-1 place-items-center gap-2 bg-gradient-to-r from-green-500 to-gray-50 bg-cover bg-center bg-no-repeat sm:h-screen sm:grid-cols-[40rem_1fr] sm:gap-0"
            // style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div>
              <h1 className="font-serif text-4xl text-cyan-900 opacity-70">
                Don't Miss The Offer.Order Now and Get The delivery!
              </h1>
              <button></button>
            </div>
            <div>
              <img src={vegetable} alt="hero_Image" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Hero;
