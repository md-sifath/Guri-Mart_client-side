// src/components/ProductCardElegant.jsx
import React from 'react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

import { formatCurrency } from '../utilities/helper';
import { useGetUser } from '../Hooks/useGetUser';
import { useCart } from '../Hooks/useCart';
import { useAddCart } from '../Hooks/useAddCart';

import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import Star from './Star';
import SpinnerMini from './SpinnerMini';

const ProductCard = ({ item }) => {
  const { name, image, _id, price, hasOffer, offerValue, rating } = item;
  const { user } = useGetUser();
  const { cartData, isLoading } = useCart();

  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const { itemAddToCart, isPending } = useAddCart(user?.user_metadata?.email);

  const priceAfterOffer = Math.ceil(price - (price / 100.0) * offerValue);

  // check  is item already in the cart
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
    <div className="group mx-auto h-auto max-w-sm transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300">
      <div>
        <img
          className="h-40 w-full transform object-contain transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
          src={image}
          alt="Product"
        />
        {hasOffer && (
          <span className="absolute right-4 top-4 rounded bg-cyan-400 px-2 py-1 text-xs font-semibold text-black">
            {offerValue}% off
          </span>
        )}
      </div>
      <div className="p-4">
        <h2 className="mb-2 font-dois text-lg font-bold text-gray-800">
          {name.slice(0, 23)}
        </h2>
        <p className="mb-2 hidden text-gray-500 sm:block">
          The best quality product that we provide.
        </p>

        <p className="mb-2 text-xl font-semibold text-green-500">
          {formatCurrency(price)}
        </p>
        <div className="mt-1">
          <Star rating={rating} />
        </div>
        <div className="flex justify-center gap-5">
          <button
            onClick={handleAddToCart}
            className="rounded bg-[#1AB293] bg-opacity-95 px-5 py-0 text-white transition-colors duration-300 hover:bg-[#148d75]"
          >
            {isPending ? <SpinnerMini /> : 'Add to cart'}
          </button>
          <Link
            to={`${pathName === '/' ? 'products' : pathName}/${_id}`}
            className="rounded bg-gray-300 px-4 py-2 text-gray-800 transition-colors duration-300 hover:bg-gray-400"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
