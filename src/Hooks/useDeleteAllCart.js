import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGetUser } from './useGetUser';
import { deleteCartAll } from '../service/cartApi';

export function useDeleteAllCart() {
  const { user } = useGetUser();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteCartAll(user?.user_metadata?.email),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['carts', user?.user_metadata?.email],
      });
      console.log('cart is deleted');
    },
  });
  return { mutate, isPending };
}
