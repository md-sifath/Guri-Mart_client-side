import Cart from '../feature/cart/Cart';
import CartSummary from '../feature/cart/CartSummary';
import EmptyCart from '../feature/cart/EmptyCart';
import { useCart } from '../Hooks/useCart';

function CartPage() {
  const { cartData } = useCart();
  return (
    <div className="bg-gary-200 m-2 flex flex-col rounded-md border-gray-400 sm:m-8">
      {cartData?.length > 0 ? <Cart /> : <EmptyCart />}
      {cartData?.length > 0 && (
        <div className="mr-3 flex justify-end">
          <CartSummary />
        </div>
      )}
    </div>
  );
}

export default CartPage;
