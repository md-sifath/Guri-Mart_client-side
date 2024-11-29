import { HiOutlineBadgeCheck } from 'react-icons/hi';

function Stat({ title, value = 0, color, children }) {
  return (
    <div className="flex w-full items-center justify-center gap-4 rounded-md bg-gray-50 px-4 py-4 shadow-md">
      <div
        className={`flex items-center justify-center rounded-full bg-${color}-300 h-20 w-20 bg-opacity-80`}
      >
        <span className={`text-5xl text-${color}-400`}>{children}</span>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-gray-500">{title}</h1>
          <span className="text-2xl font-semibold">{value}</span>
        </div>
      </div>
    </div>
  );
}

export default Stat;
