import BestProduct from '../ui/BestProduct';
import Hero from '../ui/Hero';
import OfferBanner from '../ui/OfferBanner';
import OfferSAle from '../ui/OfferSale';
import ShopCategory from '../ui/ShopCategory';
import ShopService from '../ui/ShopService';

function Home() {
  return (
    <>
      <Hero />
      <ShopService />
      <ShopCategory />
      <OfferSAle />
      <OfferBanner />
      <BestProduct />
    </>
  );
}

export default Home;
