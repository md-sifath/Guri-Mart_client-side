import { useQuery } from '@tanstack/react-query';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const { data, isLoading } = useQuery({
    queryKey: ['orders', `${location.pathname}`],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000${location.pathname}`);
      if (!res.ok) throw new Error('There is something Wrong!');
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) return;
  console.log(data);

  // converts the products data into an array
  const productsArray = Object.values(data.products);

  return (
    <div className="mx-auto rounded-md p-2 sm:p-4">
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold text-cyan-600">Order Details</h1>
        <button
          className="flex items-center text-blue-400"
          onClick={() => navigate(-1)}
        >
          <HiOutlineArrowLeft />
          Go Back
        </button>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="overflow-x-auto">
          <div className="flex w-[500px] flex-col">
            <div className="mb-6 overflow-x-auto rounded-md bg-gray-50 shadow-sm">
              <h2 className="mb-2 p-2 text-lg font-bold">
                Products {Object.keys(data.products || {}).length}
              </h2>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Product Name</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {productsArray.map((product, index) => (
                    <tr
                      key={index}
                      className={`border-b ${index % 2 == 0 ? 'bg-gray-100' : ''}`}
                    >
                      <td className="px-4 py-2">
                        <img
                          src={product.image}
                          className="h-12 w-12"
                          alt={product.name}
                        />
                      </td>
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="px-4 py-2">{product.quantity}</td>
                      <td className="px-4 py-2">{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-md bg-gray-50 p-4 shadow-sm">
              <h2 className="mb-2 text-lg font-bold text-gray-800">
                Total Price
              </h2>
              <p className="text-xl font-bold text-cyan-600">
                {data.totalPrice}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-6 rounded-md bg-gray-50 p-4 shadow-sm">
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">Order ID: </span>
              {data._id}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">Order Date: </span>{' '}
              {data.createAt}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">Email: </span> {data.email}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">Payment Method: </span>{' '}
              {data.paymentMethod}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">Order Status:</span>{' '}
              <span
                className={`inline-block rounded-full px-3 py-1 text-white ${data.orderStatus === 'pending' ? 'bg-yellow-400' : 'bg-green-400'}`}
              >
                {data.orderStatus}
              </span>
            </p>
          </div>
          <div className="mb-6 rounded-md bg-gray-50 p-4 shadow-sm">
            <h2 className="mb-2 text-lg font-bold text-gray-700">
              Shipping Address
            </h2>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">Name: </span>
              {data.orderAddress.fullName}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">Phone: </span>
              {data.orderAddress.phone}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">Division: </span>
              {data.orderAddress.division}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">District: </span>
              {data.orderAddress.district}
            </p>
            <p className="mb-2 text-lg text-gray-700">
              <span className="font-semibold">Street: </span>
              {data.orderAddress.street}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
