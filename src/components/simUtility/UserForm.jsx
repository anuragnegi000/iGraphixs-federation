import { useClerk } from "@clerk/clerk-react";

export const UserForm = () => {
  const { user } = useClerk();

  if (!user) {
    return (
      <div className="text-red-400 text-center font-bold text-3xl">
        user is not logged in
      </div>
    );
  }

  const userMail = user.email;
  return (
    <>
      <div className="justify-center">
        <h1 className=" text-2xl text-center h-full w-auto font-bold text-blue-700">
          <h2> email: {userMail}</h2>
        </h1>
      </div>
    </>
  );
};

export default UserForm;
