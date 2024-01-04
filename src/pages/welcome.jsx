import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900">
      <h1 className="text-3xl font-extrabold text-neutral-200">Welcome to My React App</h1>
      <div className="mt-8 flex justify-around gap-4">
        <Link to="/login" className="font-semibold underline text-cyan-600 transition ease-in-out delay-200 hover:text-cyan-700">
          Login
        </Link>
        <Link to="/register" className="font-semibold underline text-cyan-600 transition ease-in-out delay-200 hover:text-cyan-700">
          Register
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
