import { HiOutlineDotsHorizontal, HiOutlineShoppingBag } from 'react-icons/hi';
import { RiGhostSmileLine } from 'react-icons/ri';
import { useGetOrder } from '../Hooks/useGetOrder';
import { GiCancel } from 'react-icons/gi';

import Stat from '../ui/Stat';
import OrderTable from '../feature/ReactTable/OrderTable';
import { Column } from '../feature/ReactTable/Column';
import { formatCurrency } from '../utilities/helper';
import Spinner from '../ui/Spinner';

function MyOrder() {
  const { orderData, isLoading } = useGetOrder();
  if (isLoading) return <Spinner />;

  const TotalOrder = orderData?.length; //calculate total order

  // count pending order
  let pendingOrder = 0;
  let acceptedOrder = 0;
  let cancelOrder = 0;
  orderData?.forEach((data) => {
    if (data.orderStatus === 'pending') return pendingOrder++;
    if (data.orderStatus === 'accepted') return acceptedOrder++;
    if (data.orderStatus === 'canceled') return cancelOrder++;
  });

  const mappedData = orderData?.map((order) => ({
    orderId: order._id,
    products: `${Object.keys(order.products || {}).length} items`,
    createAt: order.createAt,
    orderStatus: order.orderStatus,
    paymentMethod: order.paymentMethod,
    totalPrice: formatCurrency(order.totalPrice),
  }));

  return (
    <div className="mt-5 flex flex-col pl-3 sm:pl-6">
      <h1 className="mb-4 text-3xl font-semibold text-gray-700">My Order</h1>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <Stat title="Total Order" value={TotalOrder} color="yellow">
          <HiOutlineShoppingBag />
        </Stat>
        <Stat title="Pending Orders" value={pendingOrder} color="sky">
          <HiOutlineDotsHorizontal />
        </Stat>
        <Stat title="Accepted Order" value={acceptedOrder} color="green">
          <RiGhostSmileLine />
        </Stat>
        <Stat title="Cancel Orders" value={cancelOrder} color="red">
          <GiCancel />
        </Stat>
      </div>
      <div className="mt-5 rounded-md bg-gray-50 pb-3 shadow-md">
        <OrderTable title="Order Details" column={Column} data={mappedData} />
      </div>
    </div>
  );
}

export default MyOrder;
