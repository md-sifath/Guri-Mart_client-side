import { Link } from 'react-router-dom';
import { useCart } from '../../Hooks/useCart';
import { formatCurrency } from '../../utilities/helper';

function OrderSummary() {
  const { cartData, isLoading } = useCart();

  //calculate the price of all product
  const totalPrice = cartData?.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0,
  );

  return (
    <div className="flex w-72 flex-col gap-3 border-[1px] border-gray-400 shadow-md md:w-80 lg:w-96">
      <div className="flex h-10 items-center justify-between border-b-[1px] border-gray-400 pl-3 pr-3">
        <h2 className="font-semibold">Order Summary</h2>
        <Link to="/cart" className="text-blue-500">
          Edit Cart
        </Link>
      </div>
      <h1 className="ml-2 text-sm text-gray-800">{cartData?.length} items</h1>
      <div className="max-h-72 overflow-auto border-b-[1px] border-gray-400">
        {cartData?.map((cart) => (
          <div className="flex items-center justify-between gap-2 pb-5 pl-3 pr-3">
            <img
              src={cart.image}
              alt="product"
              className="size-12 sm:size-14"
            />
            <h2 className="w-40 text-xs text-gray-800 sm:text-sm">
              {cart.quantity} x {cart.name}
            </h2>
            <span className="text-xs font-bold text-gray-800 sm:text-sm sm:font-normal">
              {formatCurrency(cart.price * cart.quantity)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between pl-3 pr-3 pt-3">
        <h2>Subtotal</h2>
        <span>{formatCurrency(totalPrice)}</span>
      </div>
      <div className="flex justify-between border-b-[1px] border-b-gray-400 pb-3 pl-3 pr-3">
        <h2>Delivery Cost</h2>
        <span>BDT 120.00</span>
      </div>
      <div className="flex justify-between py-4 pl-3 pr-3">
        <h2 className="text-xl sm:text-2xl">Total</h2>
        <span className="text-xl font-bold sm:text-2xl">
          {formatCurrency(totalPrice + 120)}
        </span>
      </div>
    </div>
  );
}

export default OrderSummary;
