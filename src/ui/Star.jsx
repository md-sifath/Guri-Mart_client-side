import { FaStar } from 'react-icons/fa';

function Star({ rating }) {
  const starArr = Array.from({ length: rating }, (_, i) => i);
  return (
    <div className="flex items-center gap-2 text-xl">
      {starArr.map((item) => (
        <span className="block pb-3 text-yellow-300">
          <FaStar key={item.name} />
        </span>
      ))}
    </div>
  );
}

export default Star;
