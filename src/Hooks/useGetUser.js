import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../service/authApi';

export function useGetUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });
  return {
    user,
    isLoading,
    isAuthenticated: user?.role === 'authenticated',
  };
}
