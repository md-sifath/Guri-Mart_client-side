function Offer({ value }) {
  return (
    <span className="absolute left-2 top-2 z-40 rounded-md bg-blue-400 px-2 text-[13px] font-semibold">
      {value}% off
    </span>
  );
}

export default Offer;
