import Button from './Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import OfferTag from './OfferTag';
import { useGetProducts } from '../Hooks/CustomHooks';
import Spinner from './Spinner';
import Star from './Star';
import { useGetUser } from '../Hooks/useGetUser';

import { useNavigate } from 'react-router-dom';

function OfferSAle() {
  const navigate = useNavigate();
  const { products, isLoading, error } = useGetProducts();
  const { user } = useGetUser();

  if (isLoading) return <Spinner />;
  if (error) {
    return (
      <>
        <h1>There is no content to show</h1>
      </>
    );
  }
  const offerProduct = products
    ?.filter((item) => item.hasOffer === true)
    .slice(4, 9);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    rows: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="mx-4 mt-8 flex flex-col gap-4 sm:mx-5">
        <header className="flex items-center justify-between">
          <aside>
            <h1 className="mx-4 border-spacing-4 border-b-4 text-xl font-semibold uppercase text-cyan-800 md:text-2xl">
              Hot-Offer Sale!
            </h1>
          </aside>
          {/* <Button type="sceondary" to="/products">
            Show All
          </Button> */}
        </header>

        <main className="slider-container">
          <div className="flex flex-col">
            <Slider {...settings}>
              {offerProduct?.map((item) => (
                <div className="relative w-auto max-w-lg">
                  <div className="bg-white- flex overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <OfferTag value={item.offerValue} />
                    <div className="w-1/3">
                      <img
                        src={item.image}
                        alt="product"
                        className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <h2 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="mt-2 text-sm text-gray-600">
                        We ensure the best product's quality.
                      </p>
                      <div className="mt-2">
                        <span className="fotn-bold text-lg text-gray-900">
                          {Math.ceil(
                            item.price - (item.price / 100.0) * item.offerValue,
                          )}
                          <span className="px-2 text-base font-semibold text-black line-through">
                            {`${item.price}.00`}
                          </span>
                        </span>
                      </div>
                      <div className="mt-2">
                        <Star rating={item.rating} />
                      </div>
                      <button
                        onClick={() => navigate('/products')}
                        className="mt-2 rounded-sm bg-cyan-800 bg-opacity-95 px-4 py-1 text-black"
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </main>
      </section>
    </>
  );
}

export default OfferSAle;
