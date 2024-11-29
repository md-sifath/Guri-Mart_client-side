import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateOrder } from '../service/orderApi';
import toast from 'react-hot-toast';
import { useDeleteAllCart } from './useDeleteAllCart';
import { useNavigate } from 'react-router-dom';

export function useCreateOrder(email) {
  const queryClient = useQueryClient();
  const { mutate } = useDeleteAllCart();
  const navigate = useNavigate();

  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: (data) => CreateOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['orders', email],
      });
      toast.success('Order Created succesfully');
      mutate();
      navigate('/dashboard/myorder');
    },
    onError: (err) => toast.error(err.message),
  });

  return { createOrder, isPending };
}
