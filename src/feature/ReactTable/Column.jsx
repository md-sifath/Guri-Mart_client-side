import { HiEye } from 'react-icons/hi';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const Column = [
  {
    Headers: 'Order Id',
    accessor: 'orderId',
  },
  {
    Headers: 'Products',
    accessor: 'products',
  },
  {
    Headers: 'Created Time',
    accessor: 'createAt',
  },
  {
    Headers: 'Order Status',
    accessor: 'orderStatus',
  },
  {
    Headers: 'Payment Method',
    accessor: 'paymentMethod',
  },
  {
    Headers: 'Total Price',
    accessor: 'totalPrice',
  },
  {
    Headers: 'Details',
    accessor: 'action',
    Cell: ({ row }) => (
      <Link to={`${row.orderId}`} className="text-center text-xl text-sky-400">
        <HiEye />
      </Link>
    ),
  },
];
