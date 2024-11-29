import cartImg from '../../utilities/image/CartPng.png';
import Button from '../../ui/Button';

function EmptyCart() {
  return (
    <div className="flex h-[500px] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <img src={cartImg} className="h-20 w-20" alt="cart "></img>
        <h1 className="text-center text-2xl">Sorry! Your Cart is Empty...</h1>
        <Button type="smallTo" to="/products">
          Shop now
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;
