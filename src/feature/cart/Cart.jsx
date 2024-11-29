import { useCart } from '../../Hooks/useCart';
import CartItem from './CartItem';
import Spinner from '../../ui/Spinner';
import Button from '../../ui/Button';

function Cart() {
  const { cartData, isLoading } = useCart();
  if (isLoading) return <Spinner />;

  return (
    <div className="max-h-screen overflow-y-auto px-4 py-3">
      <h2 className="mt-7 text-xl font-semibold sm:text-3xl">
        Your Cart Item: {cartData?.length}
      </h2>
      <ul className="mt-3">
        {cartData?.map((item) => (
          <CartItem item={item} key={item._id} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
