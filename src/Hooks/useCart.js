import { useQuery } from '@tanstack/react-query';
import { getCartItem } from '../service/cartApi';
import { useGetUser } from './useGetUser';

export function useCart() {
  const { user } = useGetUser();

  const {
    data: cartData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['carts', user?.user_metadata?.email],
    queryFn: () => getCartItem(user?.user_metadata?.email),
  });

  return { cartData, isLoading, error };
}
