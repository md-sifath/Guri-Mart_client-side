import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGetUser } from './useGetUser';
import toast from 'react-hot-toast';

export function useCartItemQuantity(quantity) {
  const queryclient = useQueryClient();
  const { user, isLoading } = useGetUser();

  const { mutate: updateItemQuantity, isPending } = useMutation({
    mutationFn: async (updateData) => {
      const res = await fetch(
        `https://guri-martserver.vercel.app/carts/${updateData.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ quantity: updateData.newQuantity }),
        },
      );

      if (!res.ok) {
        console.log(res);
        throw new Error(res.message);
      }
      const data = await res.json();
      return data;
    },
    onSuccess: () => {
      queryclient.invalidateQueries(['carts', user?.user_metadata?.email]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateItemQuantity, isPending };
}
