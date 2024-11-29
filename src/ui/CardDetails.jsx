import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import Spinner from './Spinner';

import Star from './Star';
import UpdateQuantity from './UpdateQuantity';
import { formatCurrency } from '../utilities/helper';
import { useCart } from '../Hooks/useCart';
import { useAddCart } from '../Hooks/useAddCart';
import { useGetUser } from '../Hooks/useGetUser';

function CardDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useGetUser();
  const { cartData, isLoading: cartLoading } = useCart();
  const { itemAddToCart, isPending } = useAddCart(user?.user_metadata?.email);

  // react query to get the data of single product
  const { data, isLoading } = useQuery({
    queryKey: [`${location.pathname}`],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000${location.pathname}`);
      if (!res.ok) throw new Error('Could not load the data');
      const data = await res.json();
      return data;
    },
  });

  function moveBack() {
    navigate(-1);
  }

  if (isLoading) return <Spinner />;

  const { name, price, image, hasOffer, offerValue, rating, quantity, _id } =
    data;
  console.log(_id);
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
    <div className="flex min-h-screen flex-col items-center justify-center border-2 border-gray-100 bg-gray-100">
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-between rounded-lg p-6 lg:flex-row">
        {/* Product Image */}
        <div className="flex h-72 w-full items-center justify-center border-2 border-gray-200 border-opacity-60 p-2 lg:h-96 lg:w-1/2">
          <img
            className="h-full w-full rounded-lg object-contain"
            src={image}
            alt="Product"
          />
        </div>

        {/* Product Info */}
        <div className="flex h-full w-full flex-col justify-between px-1 py-6 sm:p-6 lg:w-1/2 lg:pl-12">
          <div className="flex-grow">
            {hasOffer && (
              <p className="mb-2 w-32 rounded-md bg-cyan-500 p-1.5 text-center text-xl font-semibold">
                {offerValue}% Off
              </p>
            )}
            <h1 className="mb-6 text-4xl font-bold text-gray-800">{name}</h1>
            <p className="mb-8 text-lg text-gray-600">
              This is an extended description of the product, discussing its
              features, benefits, and any relevant details that make it a
              desirable purchase. The product is made from high-quality
              materials and is designed for those who demand the best.
            </p>
            <p className="mb-6 text-3xl font-bold text-green-500">
              {formatCurrency(priceAfterOffer)}
              {hasOffer ? (
                <span className="px-2 text-base font-semibold text-black line-through">
                  {`${price}.00`}
                </span>
              ) : (
                ''
              )}
            </p>
            <p>
              <Star rating={rating} />
            </p>
            <p className="mb-4 text-xl font-semibold">
              Current Stock: {quantity}
            </p>
          </div>

          {/* Buttons */}
          {check && (
            <p className="mb-4">
              <UpdateQuantity id={_id} quantity={check.quantity} />
            </p>
          )}
          <div className="flex space-x-2 sm:space-x-6">
            <button
              onClick={handleAddToCart}
              className="w-2/3 rounded bg-cyan-800 px-4 py-0 text-base text-white opacity-95 transition-colors duration-300 hover:bg-opacity-100 sm:px-16 sm:text-xl"
            >
              Add to Cart
            </button>
            <button
              onClick={moveBack}
              className="rounded-lg bg-gray-300 px-8 py-3 text-base text-gray-800 transition-colors duration-300 hover:bg-gray-400 sm:text-xl"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
