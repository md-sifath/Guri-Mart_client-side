import { useQuery } from '@tanstack/react-query';
import { GetAllOrder } from '../service/orderApi';

export function useGetAllOrder() {
  const { data: allOrderData, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: GetAllOrder,
  });

  return { allOrderData, isLoading };
}
