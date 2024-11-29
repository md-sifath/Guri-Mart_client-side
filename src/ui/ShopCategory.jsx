import { NavLink } from 'react-router-dom';

function ShopCategory() {
  return (
    <section className="mt-4 flex h-auto flex-col rounded-md px-4 py-4 text-cyan-800 md:px-8">
      <h2 className="w-[204px] border-spacing-2 border-b-4 text-xl font-semibold uppercase md:text-2xl">
        Shop Categories
      </h2>
      <div>
        <ul className="overflow mt-1 grid grid-cols-[1fr_1fr_1fr] place-items-center gap-4 gap-y-3 pb-2 md:mt-4 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
          <NavLink
            className="mt-3 h-12 w-12 rounded-md bg-cyan-300 text-center md:h-20 md:w-20"
            to="/products?category=cloth"
          >
            <span className="text-4xl md:text-6xl">👕</span>
            <h1 className="mt-3 text-sm md:mt-6 md:text-base">Cloths</h1>
          </NavLink>
          <li className="mt-3 h-12 w-12 rounded-md bg-cyan-300 text-center md:h-20 md:w-20">
            <NavLink to="/products?category=food">
              <span className="text-4xl md:text-6xl">🍔</span>
              <h1 className="mt-3 text-sm md:mt-6 md:text-base">Food</h1>
            </NavLink>
          </li>
          <li className="mt-3 h-12 w-12 rounded-md bg-cyan-300 text-center md:h-20 md:w-20">
            <NavLink to="/products?category=watch">
              <span className="text-4xl md:text-6xl">⌚</span>
              <h1 className="mt-3 text-sm text-cyan-800 md:mt-6 md:text-base">
                Watch
              </h1>
            </NavLink>
          </li>
          <li className="mt-3 h-12 w-12 rounded-md bg-cyan-300 text-center md:h-20 md:w-20">
            <NavLink to="/products?category=electronix">
              <span className="text-4xl md:text-6xl">💻</span>
              <h1 className="mt-3 text-sm md:mt-6 md:text-base">Electronix</h1>
            </NavLink>
          </li>
          <li className="mt-3 h-12 w-12 rounded-md bg-cyan-300 text-center md:h-20 md:w-20">
            <NavLink to="/products?category=furniture">
              <span className="text-4xl md:text-6xl">🪑</span>
              <h1 className="mt-3 text-sm md:mt-6 md:text-base">Furniture</h1>
            </NavLink>
          </li>
          <li className="mt-3 h-12 w-12 rounded-md bg-cyan-300 text-center md:h-20 md:w-20">
            <NavLink to="/products?category=shoe">
              <span className="text-4xl md:text-6xl">👟</span>
              <h1 className="mt-3 text-sm md:mt-6 md:text-base">Shoe</h1>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ShopCategory;
