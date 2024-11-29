import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGetUser } from './useGetUser';
import toast from 'react-hot-toast';

export function useDeleteCartItem() {
  const queryclient = useQueryClient();
  const { user } = useGetUser();

  const { mutate, isPending } = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`http://localhost:3000/carts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(res.status);
      }
      const data = await res.json();
      return data;
    },
    onSuccess: () => {
      toast.success('Cart Item deleted Successfully');
      queryclient.invalidateQueries(['carts', user?.user_metadata?.email]);
    },
    onError: (err) => {
      throw new Error('Item can not deleted!');
    },
  });

  return { mutate, isPending };
}
