import { HiOutlineEye, HiOutlineHeart } from 'react-icons/hi2';
import { formatCurrency } from '../utilities/helper';
import Offer from './OfferTag';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useGetUser } from '../Hooks/useGetUser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAddCart } from '../Hooks/useAddCart';
import { useCart } from '../Hooks/useCart';
import toast from 'react-hot-toast';
import SpinnerMini from './SpinnerMini';

function ProductItem({ item }) {
  const { name, image, _id, price, hasOffer, offerValue } = item;
  const { user } = useGetUser();
  const { cartData, isLoading } = useCart();
  const navigate = useNavigate();
  const { itemAddToCart, isPending } = useAddCart(user?.user_metadata?.email);

  const priceAfterOffer = Math.ceil(price - (price / 100.0) * offerValue);

  const check = cartData?.find((item) => item.productId === _id);

  function handleAddToCart() {
    if (user && user?.user_metadata?.email) {
      console.log(user);
      const cartItem = {
        email: user?.user_metadata?.email,
        productId: _id,
        name,
        image,
        price: priceAfterOffer,
        quantity: 1,
      };
      // console.log(cartItem);
      if (!check) {
        itemAddToCart(cartItem);
      } else {
        toast('Item Already in the Cart');
      }
    } else {
      Swal.fire({
        title: 'You are not login!',
        text: 'Please Login to add to cart!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  }

  return (
    <div className="rounded-b-md shadow-xl">
      <main className="mb-4 flex h-80 w-72 flex-col items-center justify-center gap-2 rounded-sm bg-gray-100 md:w-64">
        <div className="gird relative h-[170px] w-[170px] place-items-center overflow-hidden object-contain hover:bottom-0 hover:block">
          <img
            className="overfolow-hiden mx-auto h-full w-full place-items-center p-5 transition duration-300 hover:rotate-6 hover:scale-125 hover:overflow-hidden"
            src={image}
            alt="black-t-shirt"
          />
          {hasOffer && <Offer value={offerValue} />}
          <button className="absolute right-2 top-2 z-40 rounded-3xl bg-gray-600 p-2 text-xl font-semibold text-gray-200 hover:bg-blue-400 hover:text-blue-950">
            <HiOutlineHeart />
          </button>
          <button className="absolute right-2 top-14 z-40 rounded-3xl bg-gray-600 p-2 text-xl font-semibold text-gray-200 hover:bg-blue-400 hover:text-blue-950">
            <HiOutlineEye />
          </button>
          <button
            onClick={handleAddToCart}
            className="right absolute bottom-0 left-0 z-20 flex w-full items-center justify-center gap-1 rounded-sm bg-blue-500 py-1 text-blue-950 hover:bg-blue-400"
          >
            {isLoading ? (
              <SpinnerMini />
            ) : (
              <span>
                Add to Cart <HiOutlineShoppingCart />
              </span>
            )}
          </button>
        </div>
        <h2 className="text-semibold text-sm">{name}</h2>
        <p className="mb-2">
          {formatCurrency(priceAfterOffer)}{' '}
          {hasOffer ? (
            <span className="text-[16px] font-semibold line-through">
              {`${price}.00`}
            </span>
          ) : (
            ''
          )}
        </p>
      </main>
    </div>
  );
}

export default ProductItem;
