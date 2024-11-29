function serviceCart({ title, children, description, color }) {
  return (
    <div className="rounded-br-lg rounded-tl-lg bg-white p-3 opacity-80 shadow-md transition-all duration-500">
      <div className="group flex flex-col items-center">
        <span className="group-hover: mb-2 text-2xl text-emerald-600 md:text-3xl">
          {children}
        </span>

        <h2 className="text-sm font-semibold md:text-xl">{title}</h2>
      </div>
    </div>
  );
}

export default serviceCart;
