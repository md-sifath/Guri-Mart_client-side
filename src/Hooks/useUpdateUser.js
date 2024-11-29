import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateCurrentUser } from '../service/authApi';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => {
      UpdateCurrentUser(data);
      //console.log(data);
    },
    onSuccess: () => {
      toast.success('User Updated successfully');
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { mutate, isPending };
}
