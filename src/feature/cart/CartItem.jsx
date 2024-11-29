import { formatCurrency } from '../../utilities/helper.js';
import { AiTwotoneDelete } from 'react-icons/ai';
import { useDeleteCartItem } from '../../Hooks/useDeleteCartItem.js';
import UpdateQuantity from '../../ui/UpdateQuantity.jsx';
import Swal from 'sweetalert2';

function CartItem({ item }) {
  const { mutate } = useDeleteCartItem();

  const { image, price, name, quantity, _id, productId } = item;

  function handleDelete(id) {
    Swal.fire({
      title: 'Are You want to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id);
      }
    });
  }
  const totalPrice = price * quantity;

  return (
    <li className="my-2 rounded-md border-2 p-4 py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        <img src={image} alt="pizza" className="h-16"></img>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        {/* <UpdateItemQuantity id={id} quantity={currentQuantity} /*/}
        <UpdateQuantity id={productId} quantity={quantity} />

        <button onClick={() => handleDelete(_id)} className="text-xl">
          <AiTwotoneDelete />
        </button>
      </div>
    </li>
  );
}

export default CartItem;
