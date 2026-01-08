import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! Page not found
      </p>

      <NavLink
        to="/"
        className="mt-6 text-orange-700 underline"
      >
        Go back Home
      </NavLink>
    </div>
  );
};

export default NotFound;
