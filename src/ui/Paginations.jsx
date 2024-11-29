function Paginations({ totalPage, currentPage, onPageChange }) {
  const pageNumber = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className="mt-4 flex items-center justify-center space-x-2">
      <button
        className={`rounded-md border px-4 py-2 ${currentPage === 1 ? 'cursor-not-allowed bg-slate-200' : 'bg-slate-200 hover:bg-slate-400'}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pageNumber.map((it) => (
        <button
          key={it}
          onClick={() => onPageChange(it)}
          className={`rounded-md border px-4 py-2 ${currentPage === it ? 'color-white bg-blue-400' : 'bg-gray-200 hover:bg-gray-400'}`}
        >
          {it}
        </button>
      ))}
      <button
        className={`rounded-md border px-4 py-2 ${currentPage === totalPage ? 'cursor-not-allowed bg-slate-200' : 'bg-slate-200 hover:bg-slate-400'}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
}

export default Paginations;
