import { HiOutlineMailOpen } from 'react-icons/hi';

function NewsLetter() {
  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-4 bg-[#008459] py-5 lg:flex lg:flex-row lg:px-4">
      <div className="flex flex-col gap-2 text-center md:flex md:items-center md:gap-2">
        <span className="text-xl text-white">
          <HiOutlineMailOpen />
        </span>
        <p className="text-2xl text-white">Sign Up For Newsletter</p>
      </div>
      <p className="text-sm text-white">
        ...and receive BDT 100.00 cupon on next shopping
      </p>
      <div>
        <input
          type="email"
          className="h-10 w-44 rounded-l-md pl-3 outline-none sm:w-72"
          placeholder="enter your email"
        />
        <button className="h-10 rounded-r-md bg-orange-400 bg-opacity-95 px-3">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
