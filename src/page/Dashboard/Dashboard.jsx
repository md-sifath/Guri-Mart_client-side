import { HiOutlineBanknotes } from 'react-icons/hi2';
import Stat from '../../ui/Stat';
import SalesBarChart from '../../feature/Chart/SalesBarChart';
import { PiSealPercent } from 'react-icons/pi';
import { GoCheckbox, GoChecklist } from 'react-icons/go';
import { LiaMoneyBillAlt } from 'react-icons/lia';
import { useGetAllOrder } from '../../Hooks/useGetAllOrder';
import { formatCurrency } from '../../utilities/helper';
import Spinner from '../../ui/Spinner';

function Dashboard() {
  const { allOrderData, isLoading } = useGetAllOrder();

  if (isLoading) return <Spinner />;

  // calculate the total sale
  const totalSales = allOrderData?.reduce(
    (sum, cur) => sum + (cur.totalPrice - 120),
    0,
  );

  // calculate today sales
  const todayDate = new Date().toISOString().slice(0, 10);
  const todaySales = allOrderData?.reduce((sum, cur) => {
    if (new Date(cur.createAt).toISOString().slice(0, 10) === todayDate) {
      return sum + (cur.totalPrice - 120);
    }
    return sum;
  }, 0);

  // calculate the data for barChart
  const monthlySlaes = allOrderData.reduce((acc, order) => {
    const date = new Date(order.createAt);
    const month = date.toLocaleString('Default', { month: 'short' });
    acc[month] = (acc[month] || 0) + order.totalPrice;
    return acc;
  }, {});

  const allMonth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  // Enclude All month
  const chartData = allMonth.map((month) => ({
    month,
    sale: monthlySlaes[month] || 0,
  }));

  // console.log(chartData);
  return (
    <div className="mt-5 flex w-full flex-col pl-3 lg:pl-6">
      <div>
        <h1 className="mb-5 text-lg font-semibold text-gray-800 sm:text-3xl">
          Dashboard
        </h1>
        <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Stat
            title="Total sale"
            color="green"
            value={formatCurrency(totalSales)}
          >
            <LiaMoneyBillAlt />
          </Stat>
          <Stat
            title="Today Sale"
            color="sky"
            value={formatCurrency(todaySales)}
          >
            <PiSealPercent />
          </Stat>
          <Stat title="Total Order" color="orange" value={allOrderData?.length}>
            <GoChecklist />
          </Stat>
        </div>
        <div>
          <SalesBarChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
