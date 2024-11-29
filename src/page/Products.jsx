import { div, useEffect, useState } from 'react';
import { useGetProducts } from '../Hooks/CustomHooks';
import { useSearchParams } from 'react-router-dom';
import { HiOutlineXMark } from 'react-icons/hi2';

import PageBanner from '../ui/pageBanner';
import Paginations from '../ui/Paginations';
import ProductCard from '../ui/ProductCard';
import Spinner from '../ui/Spinner';
import Filter from '../ui/Filter';
import SortBy from '../ui/SortBy';
import Category from '../ui/Category';

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const { products = [], isLoading, error } = useGetProducts();

  useEffect(function () {
    window.scrollTo(0, 0);
  });

  if (isLoading) return <Spinner />;

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  //1) FILTER DATA BY CATEGORY
  const categoryValue = searchParams.get('category') || 'all';
  let categoryData;

  if (categoryValue === 'all') categoryData = products;

  if (categoryValue === 'cloth') {
    categoryData = products.filter((product) => product.category === 'cloth');
  }
  if (categoryValue === 'food') {
    categoryData = products.filter((product) => product.category === 'food');
  }
  if (categoryValue === 'watch') {
    categoryData = products.filter((product) => product.category === 'watch');
  }
  if (categoryValue === 'shoe') {
    categoryData = products.filter((product) => product.category === 'shoe');
  }
  if (categoryValue === 'electronix') {
    categoryData = products.filter(
      (product) => product.category === 'electronix',
    );
  }
  if (categoryValue === 'furniture') {
    categoryData = products.filter(
      (product) => product.category === 'furniture',
    );
  }

  //1) FILTER DATA
  const filterValue = searchParams.get('discount') || 'all';
  let filterProducts;
  if (filterValue === 'all') filterProducts = categoryData;
  if (filterValue === 'with-Discount') {
    filterProducts = categoryData.filter(
      (product) => product.hasOffer === true,
    );
  }
  if (filterValue === 'no-Discount') {
    filterProducts = categoryData.filter(
      (product) => product.hasOffer === false,
    );
  }
  //2) SORT DATA
  const sortValue = searchParams.get('sortBy') || 'rating-asc';
  // console.log(sortValue);
  const [field, order] = sortValue.split('-');

  const multiplier = order === 'asc' ? 1 : -1;

  const sortedProducts = filterProducts.sort(
    (a, b) => (a[field] - b[field]) * multiplier,
  );

  //  pagination calculation
  const totalPage = Math.ceil(filterProducts?.length / 6);
  let firstIndex = (currentPage - 1) * 6;
  let lastIndex = 6 * currentPage;
  const pageData = sortedProducts.slice(firstIndex, lastIndex);

  return (
    <div>
      <PageBanner />
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="hidden border-r-[3px] border-gray-200 lg:block lg:w-60">
          <Category />
        </div>
        <div className="px-4 lg:hidden">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="border-3 w-full rounded-md border bg-gray-200 px-4 py-2"
          >
            Category{' '}
            <span
              className={`transform transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}
            >
              ▼
            </span>
          </button>
        </div>
        {isCategoryOpen && (
          <div className="fixed left-0 top-0 z-50 h-full w-3/4 border-0 border-r-[3px] border-r-gray-200 bg-white p-4 lg:w-60">
            <button
              onClick={() => setIsCategoryOpen(false)}
              className="hover:text-balck absolute right-4 top-4 text-gray-500"
            >
              <HiOutlineXMark />
            </button>
            <Category />
          </div>
        )}
        <div className="flex-1">
          <div className="mr-3 flex flex-col items-center justify-end gap-3 sm:flex-row">
            <Filter />
            <SortBy
              options={[
                { value: 'name-asc', label: 'Sort by name (A-Z)' },
                { value: 'name-desc', label: 'Sort by name (Z-A)' },
                { value: 'price-asc', label: 'Sort by priec (low first)' },
                { value: 'price-desc', label: 'Sort by price (high-first)' },
              ]}
            />
          </div>
          {!isLoading ? (
            <main className="mx-4 my-10 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-4">
              {pageData.map((item) => (
                <ProductCard item={item} key={item._id} />
              ))}
            </main>
          ) : (
            <Spinner />
          )}
          <Paginations
            totalPage={totalPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
