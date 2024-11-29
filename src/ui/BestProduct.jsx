import { useGetProducts } from '../Hooks/CustomHooks';
import Spinner from './Spinner';

import ProductCard from './ProductCard';
import Button from './Button';
import Slider from 'react-slick';

function BestProduct() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    rows: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
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
  const { products, isLoading } = useGetProducts();
  if (isLoading) return <Spinner />;
  const productsData = products?.slice(0, 8);
  return (
    <div>
      <div className="mx-4 mt-8 flex items-center justify-between sm:mx-8 sm:mt-10">
        <h1 className="border-spacing-4 border-b-4 text-2xl font-semibold uppercase text-cyan-800 md:text-2xl">
          Best Product
        </h1>
        {/* <Button type="sceondary" to="/products">
          Show All
        </Button> */}
      </div>
      <main className="slider-component">
        <div className="mx-4 mt-4 flex flex-col">
          <Slider {...settings}>
            {productsData?.map((item) => (
              <ProductCard item={item} key={item._id} />
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
}

export default BestProduct;
