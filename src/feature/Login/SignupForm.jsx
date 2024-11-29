import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../ui/Input';
import { useCreateUser } from '../../Hooks/useCreatUser';
import SpinnerMini from '../../ui/SpinnerMini';

function SignupForm() {
  const { userCreate, isPending } = useCreateUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !name || !password) return;
    if (password.length < 6) {
      setError({ passLength: 'Password Should be 6 charecter long' });
      return;
    }
    if (password !== confirmPassword) {
      setError({ passMatch: "Password didn't match" });
      return;
    }
    setError({});
    const userInfo = {
      email,
      password,
      name,
    };
    // console.log(userCreate);
    userCreate(userInfo);
    setEmail('');
    setName('');
    setPassword('');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="rounded-md bg-gray-200 p-10">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          SignUp your account
        </h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-8 text-gray-900"
          >
            Full Name:
          </label>
          <Input
            type="text"
            onchange={(e) => setName(e.target.value)}
            id="name"
            value={name}
          />

          <label
            htmlFor="email"
            className="block text-sm font-medium leading-8 text-gray-900"
          >
            Email address:
          </label>
          <Input
            type="email"
            onchange={(e) => setEmail(e.target.value)}
            id="email"
            value={email}
          />

          <label
            htmlFor="password"
            className="block text-sm font-medium leading-8 text-gray-900"
          >
            Password:
          </label>
          <Input
            type={isVisible ? 'text' : 'password'}
            value={password}
            onchange={(e) => setPassword(e.target.value)}
            id="password"
          />
          {error.passLength && (
            <p className="text-sm text-red-400">{error.passLength}</p>
          )}
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium leading-8 text-gray-900"
          >
            Confirm-Password:
          </label>
          <Input
            type={isVisible ? 'text' : 'password'}
            onchange={(e) => setConfirmPassword(e.target.value)}
            id="confirm-password"
            value={confirmPassword}
          />
          {error.passMatch && (
            <p className="text-sm text-red-400">{error.passMatch}</p>
          )}
          <input
            type="checkbox"
            id="passShow"
            value={isVisible}
            onChange={(e) => setIsVisible(e.target.checked)}
            className="mr-2 mt-3 size-4"
          />
          <label htmlFor="passShow">Show Password</label>
          <button
            disabled={isPending}
            className="mt-4 h-10 w-full rounded-md bg-cyan-800 outline-none transition-all duration-200 active:translate-y-2"
            type="submit"
          >
            {isPending ? <SpinnerMini /> : 'Signup'}
          </button>
          <h2 className="mt-3 text-center font-semibold">
            Already have an account?{' '}
            <Link to="/login" className="text-cyan-700 underline">
              Login
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
