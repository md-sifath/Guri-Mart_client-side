import { useGetUser } from '../Hooks/useGetUser';
import { HiOutlineMail } from 'react-icons/hi';
import UpdatePassForm from '../feature/Login/UpdatePassForm';

function Profile() {
  const { user } = useGetUser();

  return (
    <div>
      <div className="mt-4 min-h-screen sm:pl-6">
        <h1 className="mb-4 text-3xl font-semibold text-gray-700">
          My Profile
        </h1>
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <div className="rounded-md bg-gray-50 p-1 px-6 text-gray-700 shadow-md sm:p-10 sm:px-20">
            <img
              src="https://avatar.iran.liara.run/public/8"
              alt="avatar"
              className="mb-2 h-40 w-40"
            />
            <p className="mb-2 flex items-center gap-3 text-xl">
              <span className="font-semibold"> Name:</span>{' '}
              {user?.user_metadata?.fullName}
            </p>
            <p className="flex items-center gap-3 text-2xl">
              <span className="text-xl font-semibold">
                {' '}
                <HiOutlineMail />
              </span>
              {user?.user_metadata?.email}
            </p>
          </div>
          <div className="mb-5 flex flex-col gap-5 rounded-md bg-gray-50 p-2 px-2 shadow-md sm:mb-0 sm:p-10 sm:px-20">
            <UpdatePassForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
