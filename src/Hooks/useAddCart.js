import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addToCart } from '../service/cartApi';
import toast from 'react-hot-toast';

export function useAddCart(email) {
  const queryClient = useQueryClient();

  const { mutate: itemAddToCart, isPending } = useMutation({
    mutationFn: (data) => addToCart(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['carts', email],
      });
      toast.success('Successfully added to the cart');
    },
    onError: (err) => {
      toast.error("couldn't Add to cart");
    },
  });
  return { itemAddToCart, isPending };
}
