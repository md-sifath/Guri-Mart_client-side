import { useCartItemQuantity } from '../Hooks/useCartItemQuantity';
import Button from './Button';
import Spinner from './Spinner';

function UpdateQuantity({ id, quantity }) {
  const { updateItemQuantity, isPending } = useCartItemQuantity();

  // if (isPending) return <Spinner />;

  function handleQuantity(newQuantity) {
    const updateData = {
      id,
      newQuantity,
    };
    updateItemQuantity(updateData);
    // console.log(id, newQuantity);
  }

  if (quantity)
    return (
      <div className="flex gap-2 md:gap-3">
        <Button
          type="round"
          onclick={() => handleQuantity(Number(quantity - 1))}
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          type="round"
          onclick={() => handleQuantity(Number(quantity) + 1)}
        >
          +
        </Button>
      </div>
    );
}

export default UpdateQuantity;
