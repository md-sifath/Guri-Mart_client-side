import { useReactTable } from '@tanstack/react-table';

function OrderTable({ column, data, title }) {
  return (
    <div className="overflow-auto p-3">
      {title && <h1 className="mb-4 text-xl font-semibold">{title}</h1>}
      <table className="max-h-80 border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50 text-left">
            {column?.map((col) => (
              <th
                key={col.Headers}
                className="font border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800"
              >
                {col.Headers}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-200' : ''}`}
            >
              {column?.map((col, index) => (
                <td
                  key={index}
                  className="border border-gray-300 px-3 py-3 text-sm font-medium text-gray-700"
                >
                  {col.Cell ? col.Cell({ row }) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
