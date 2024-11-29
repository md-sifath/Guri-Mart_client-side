import { useQuery } from '@tanstack/react-query';
import { GetOrderData } from '../service/orderApi';
import { useGetUser } from './useGetUser';

export function useGetOrder() {
  const { user } = useGetUser();

  const {
    data: orderData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['orders', user?.user_metadata?.email],
    queryFn: () => GetOrderData(user?.user_metadata?.email),
  });

  return { orderData, isLoading, error };
}
