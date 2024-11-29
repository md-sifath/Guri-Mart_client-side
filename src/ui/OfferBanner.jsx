import { HiOutlineArrowRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

function OfferBanner() {
  const navigate = useNavigate();
  return (
    <section className="mx-4 mt-8 grid grid-cols-1 gap-3 md:mx-8 md:grid-cols-2">
      <div className="rounded-lg bg-yellow-500 bg-opacity-80 bg-[url('watch.png')] bg-contain bg-[right_top_1rem] bg-no-repeat p-10">
        <div className="flex flex-col items-start gap-2 bg-right text-start align-middle font-semibold text-gray-800 md:text-white">
          <h1>Save 30%-40% Now!</h1>
          <p className="text-xl md:text-2xl">The Ultimate Lifestyle-2024</p>
          <button
            onClick={() => navigate('/products?category=watch')}
            className="rounded-md bg-violet-600 p-2 px-4 outline-none"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="rounded-lg bg-violet-800 bg-opacity-75 bg-[url('shoe.png')] bg-contain bg-[right_top_1rem] bg-no-repeat p-10">
        <div className="flex flex-col items-start gap-2 bg-right text-start align-middle text-white">
          <h1>Big Discount</h1>
          <p className="text-2xl">The Ultimate Lifestyle-2024</p>
          <button
            onClick={() => navigate('/products?category=shoe')}
            className="flex w-auto items-center justify-between rounded-md bg-yellow-500 bg-opacity-80 p-2 px-4 outline-none"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default OfferBanner;
