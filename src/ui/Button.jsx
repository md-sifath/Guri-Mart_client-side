import { Link } from 'react-router-dom';

function Button({ children, type, to, onclick }) {
  const base =
    ' rounded-md border bg-[#1AB293] font-semibold text-white transition-colors duration-300 hover:bg-[#0f816a] focus:outline-none focus:ring focus:ring-green-400 focus:ring-offset-1';

  const style = {
    primary: base + ' p-2 w-full hover:bg-[#0f816a]',
    smallTo:
      base + ' text-xs sm:text-sm h-6 w-[80px] sm:h-8 sm:w-24 text-center pt-1',
    small: base + 'text-xs sm:text-sm h-6 w-[80px] sm:h-8 sm:w-24 text-center',
    round: base + ' px-2.5 py-1 md:px-3.5 text-sm md:py-2',
    sceondary:
      'inline-block text-sm rounded-md border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 md:px-6 md:py-2.5',
  };

  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }

  if (onclick) {
    return (
      <button className={style[type]} onClick={onclick}>
        {children}
      </button>
    );
  }
  return <button className={style[type]}>{children}</button>;
}

export default Button;
