import { useMutation } from '@tanstack/react-query';
import { SignupUser } from '../service/authApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCreateUser() {
  const navigate = useNavigate();
  const { mutate: userCreate, isPending } = useMutation({
    mutationFn: (data) => SignupUser(data),
    onSuccess: () => {
      toast.success('User created Successfuly');
      navigate('/');
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { userCreate, isPending };
}
