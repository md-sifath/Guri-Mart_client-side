import { useState } from 'react';
import Button from '../../ui/Button';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUser } from '../../service/authApi';
import Input from '../../ui/Input';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import SpinnerMini from '../../ui/SpinnerMini';

function LoginFrom() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const queryClient = useQueryClient();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathName || '/';
  console.log(location.state);

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User login Succesfull',
        timer: 3000,
      });
      navigate(-1);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    // console.log(email, password);
    mutate({ email, password });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-6 text-center text-xl font-semibold md:text-2xl">
        Login to your account
      </h1>
      <form onSubmit={handleSubmit} className="bg-gray-50 p-10">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-8 text-gray-900"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-8 text-gray-900"
        >
          Password
        </label>
        <Input
          id="password"
          type={isVisible ? 'text' : 'password'}
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />
        <input
          type="checkbox"
          id="passShow"
          value={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
          className="mr-2 mt-3 size-4"
        />
        <label htmlFor="passShow">Show Password</label>
        <button
          className="mt-4 h-10 w-full rounded-md bg-cyan-800 outline-none transition-all duration-200 active:translate-y-2"
          type="submit"
        >
          {isPending ? <SpinnerMini /> : 'Login'}
        </button>
        <h2 className="mt-3 text-center font-semibold">
          Don't have an account?{' '}
          <Link to="/signup" className="text-cyan-700">
            Sign Up
          </Link>
        </h2>
      </form>
    </div>
  );
}

export default LoginFrom;
