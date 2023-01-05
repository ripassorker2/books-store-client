import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";

const Resistation = () => {
  const { createUser, updateUserProfile, setLoading, signInWithGoogle } =
    useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const token = useToken(currentUser);
  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  });

  const handleResister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = event.target.role.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        saveUserInDB(name, email, role);

        updateUserProfile(name).then((data) => {});
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const role = "Buyer";
        saveUserInDB(user.displayName, user.email, role);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  const saveUserInDB = (name, email, role) => {
    const user = {
      name: name,
      email: email,
      role: role,
    };
    fetch(`https://books-store-server-six.vercel.app/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Resister succesfully..!");
          setCurrentUser(email);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full max-w-md shadow-xl rounded-lg m-auto border-2 -mt-10">
      <h1 className="text-red-600 pt-5 text-center font-semibold text-4xl">
        {" "}
      </h1>
      <form
        onSubmit={handleResister}
        className="bg-white rounded px-8 pt-6 pb-2"
      >
        <div className="mb-4 mt-3">
          <label
            className="block text-gray-600 font-semibold text-sm mb-2"
            htmlFor="username"
          >
            Full Name
          </label>
          <input
            className=" border rounded w-full py-3 focus:outline-gray-600 px-3
             text-gray-700 leading-tight border-gray-500 "
            id="name"
            type="text"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 font-semibold text-sm mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=" border rounded w-full py-3 focus:outline-gray-600 px-3
             text-gray-700 leading-tight border-gray-500 "
            id="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <label
          htmlFor="email"
          className="block mb-2 font-semibold text-gray-500 text-sm"
        >
          Select profile type
        </label>
        <fieldset className=" flex">
          <div className="flex items-center mr-4 mb-4">
            <input
              type="radio"
              name="role"
              value="Buyer"
              className="h-3 w-3 border-gray-300"
              aria-labelledby="country-option-2"
              aria-describedby="country-option-2"
              required
            />
            <label
              htmlFor="country-option-2"
              className="text-sm  text-gray-900 ml-2 block"
            >
              Buyer
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="role"
              value="Seller"
              className="h-3 w-3 border-gray-300"
              aria-labelledby="country-option-3"
              aria-describedby="country-option-3"
              required
            />
            <label
              htmlFor="country-option-3"
              className="text-sm font-medium text-gray-900 ml-2 block"
            >
              Seller
            </label>
          </div>
        </fieldset>
        <div className="mb-4">
          <label
            className="block text-gray-600 font-semibold text-sm mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className=" border rounded w-full py-3 focus:outline-gray-600 px-3 
            text-gray-700 leading-tight border-gray-500 "
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-600 w-full hover:bg-red-700 text-white font-bold py-3 px-4 
            rounded duration-300 "
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="px-8 pb-3">
        <button
          onClick={handleGoogleSignin}
          className=" py-3.5 px-4 border rounded-lg   border-purple-600 flex justify-center items-center w-full my-3"
        >
          <svg
            width={19}
            height={20}
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
              fill="#4285F4"
            />
            <path
              d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
              fill="#34A853"
            />
            <path
              d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
              fill="#FBBC05"
            />
            <path
              d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
              fill="#EB4335"
            />
          </svg>
          <p className="text-base font-semibold ml-4 text-gray-500">
            Continue with Google
          </p>
        </button>
      </div>
    </div>
  );
};

export default Resistation;
