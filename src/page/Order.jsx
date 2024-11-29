import { useState } from 'react';
import CartSummary from '../feature/cart/CartSummary';
import OrderSummary from '../feature/Order/OrderSummary';
import PlaceOrder from '../feature/Order/PlcaeOrder';

function Order() {
  return (
    <>
      <h1 className="ml-4 mt-5 text-3xl uppercase">Billing Details</h1>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-[auto_auto]">
        <PlaceOrder />
        <OrderSummary />
      </div>
    </>
  );
}

export default Order;
