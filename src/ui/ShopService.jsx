import { HiOutlineBanknotes, HiOutlineTruck } from 'react-icons/hi2';
import ServiceCart from './serviceCart';
import { HiOutlineSupport } from 'react-icons/hi';
import { LiaHandsHelpingSolid } from 'react-icons/lia';
function ShopService() {
  return (
    <div className="grid grid-cols-2 gap-2 px-6 py-3 md:grid-cols-[1fr_1fr_1fr_1fr] md:py-5">
      <ServiceCart title="Free delivery accorss The Country">
        <HiOutlineTruck />
      </ServiceCart>
      <ServiceCart title="100% Original Product Guarantee!">
        <LiaHandsHelpingSolid />
      </ServiceCart>
      <ServiceCart title="24 Hours Support">
        <HiOutlineSupport />
      </ServiceCart>
      <ServiceCart title="Secure Payment">
        <HiOutlineBanknotes />
      </ServiceCart>
    </div>
  );
}

export default ShopService;
