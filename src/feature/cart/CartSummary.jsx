import { useCart } from '../../Hooks/useCart';
import { formatCurrency } from '../../utilities/helper';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';

function CartSummary() {
  const { cartData, isLoading } = useCart();

  if (isLoading) return <Spinner />;

  const totalPrice = cartData?.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0,
  );

  return (
    <div className="flex w-64 flex-col gap-4 pb-8 pl-4 md:w-96 md:pl-8">
      <p className="Md:gap-8 flex items-center justify-between gap-4">
        <h1>Total Product:</h1>
        <p>{cartData?.length}</p>
      </p>
      <p className="flex items-center justify-between gap-4 md:gap-8">
        <h1>Sub-Total:</h1>
        <p>{formatCurrency(totalPrice)}</p>
      </p>
      <p className="flex items-center justify-between gap-4 md:gap-8">
        <h1>Delivery Charge:</h1>
        <p>{cartData?.length > 0 ? formatCurrency(120) : 0.0}</p>
      </p>
      <span className="border-b-2"></span>
      <p className="flex items-center justify-between gap-4 md:gap-8">
        <h1>Total:</h1>
        <p>{cartData?.length > 0 ? formatCurrency(totalPrice + 120) : 0.0}</p>
      </p>
      <div className="mb-6 mt-6 flex space-x-2">
        <Button to="/order" type="primary">
          PROCED TO CHECKOUT
        </Button>
        <Button to="/products" type="sceondary">
          Continue Shoping
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;
