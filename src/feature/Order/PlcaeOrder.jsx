import { useForm } from 'react-hook-form';
import { useGetUser } from '../../Hooks/useGetUser';
import { useCreateOrder } from '../../Hooks/useCreateOrder';
import { formatDate } from '../../utilities/helper';
import { useCart } from '../../Hooks/useCart';

import Button from '../../ui/Button';

function PlcaeOrder() {
  const { user } = useGetUser();
  const { cartData, isPending } = useCart();
  const { createOrder, isLoading } = useCreateOrder(user?.user_metadata?.email);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  // object for input style
  const style = {
    base: 'block w-60 md:w-80 lg:w-96 rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6',
  };
  if (isPending) return;

  // calculate the total price of cart
  const totalPrice = cartData?.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0,
  );
  // submit form data
  function onSubmit(data) {
    const orderData = {
      products: {
        ...cartData,
      },
      orderAddress: {
        ...data,
      },

      totalPrice: totalPrice + 120, // add delivery cost
      orderStatus: 'pending',
      paymentMethod: 'Cash on delivery',
      email: user?.user_metadata?.email,
      createAt: formatDate(new Date()),
    };
    createOrder(orderData);
    reset();
  }

  return (
    <div className="w-flex mb-8 mt-7 h-auto flex-col items-center justify-center rounded-md px-8 py-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <lable className="mt-2 block text-sm">Full Name</lable>
        <input
          className={style.base}
          type="text"
          id="fullName"
          {...register('fullName', {
            required: 'This field is required',
          })}
        />
        {errors?.fullName?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.fullName.message}</p>
        )}
        <lable className="mt-2 block text-sm">Phone</lable>
        <input
          className={style.base}
          type="text"
          id="phone"
          {...register('phone', {
            required: 'This field is required',
            pattern: {
              value: /^01[3-9]\d{8}$/,
              message: 'Please Enter a valid phone number',
            },
          })}
        />
        {errors?.phone?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>
        )}
        <label className="mt-2 block text-sm">Division</label>
        <input
          className={style.base}
          type="text"
          id="division"
          {...register('division', { required: 'This field is required' })}
        />
        {errors?.division?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.division.message}</p>
        )}
        <label className="mt-2 block text-sm">District</label>
        <input
          className={style.base}
          type="text"
          id="district"
          {...register('district', { required: 'This field is reqired' })}
        />
        {errors?.district?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.district.message}</p>
        )}
        <label className="mt-2 block text-sm">Street</label>
        <input
          className={style.base}
          type="text"
          id="street"
          {...register('street', { required: 'This field is reqired' })}
        />
        {errors?.street?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.street.message}</p>
        )}
        <span className="mt-3 block">
          <Button type="primary">Place Order</Button>
        </span>
      </form>
    </div>
  );
}

export default PlcaeOrder;
