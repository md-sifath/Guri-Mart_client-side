import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import { useUpdateUser } from '../../Hooks/useUpdateUser';

function UpdatePassForm() {
  const { mutate, isPending } = useUpdateUser();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  function onSubmit({ newPassword }) {
    mutate({ newPassword });
    console.log(newPassword);
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-gray-700">Change Password</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-sm font-medium leading-8 text-gray-900">
          New Password:
        </label>
        <input
          type="password"
          id="newPassword"
          {...register('newPassword', {
            required: 'This field is required',

            minLength: {
              value: 6,
              message: 'Password length should be atleast 6',
            },
          })}
          className="block w-60 rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:w-72 sm:text-sm sm:leading-6"
        />
        {errors?.newPassword?.message && (
          <p className="text-sm text-red-400">{errors.newPassword?.message}</p>
        )}
        <label className="block text-sm font-medium leading-8 text-gray-900">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: 'This field is required',

            validate: (value) =>
              getValues('newPassword') === value || 'Password does not match!',
          })}
          className="block w-60 rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:w-72 sm:text-sm sm:leading-6"
        />
        {errors?.confirmPassword?.message && (
          <p className="text-sm text-red-400">{errors.newPassword?.message}</p>
        )}
        <button className="mt-3 w-full rounded-md bg-green-400 py-2 text-center text-green-800">
          Update Password
        </button>
      </form>
    </div>
  );
}

export default UpdatePassForm;
