import { Children } from 'react';
import { useGetUser } from '../Hooks/useGetUser';
import { useNavigate } from 'react-router-dom';

function Privateroute({ children }) {
  const { user } = useGetUser();
  const navigate = useNavigate();

  if (user && user?.email) {
    //Then display children
    return children;
  } else navigate('/login');
}

export default Privateroute;
