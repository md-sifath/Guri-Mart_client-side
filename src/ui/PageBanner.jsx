import Button from './Button';

function PageBanner() {
  return (
    <div className="m-4 flex flex-col items-center justify-between bg-gray-200 px-3 py-4 sm:flex-row sm:px-6 sm:py-8">
      <h1 className="text-sm uppercase md:text-sm lg:text-xl">
        shop and{' '}
        <span className="mx-2 inline-block rounded-md bg-yellow-400 px-2 font-semibold opacity-85">
          save big and hottest
        </span>{' '}
        product
      </h1>
      <div className="flex justify-between gap-4">
        <h1>
          From <span className="text-2xl text-red-700 opacity-95">$499.00</span>
        </h1>
        <Button type="small">Shop Now</Button>
      </div>
    </div>
  );
}

export default PageBanner;
