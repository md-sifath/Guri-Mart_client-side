import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logOutUser } from '../service/authApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logOut, isPending } = useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success('You are Succesfully Logout');
      navigate('/', { replace: true });
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });
  return { logOut, isPending };
}
