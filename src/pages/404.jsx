import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const ErrorPageNotFound = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-neutral-200 bg-slate-800">
      <h1 className="mb-4 text-3xl font-bold">Oops!</h1>
      <p className="mb-4 text-9xl">{error.status || error.statusText}</p>
      <p>Sorry, an unexpected error has occured.</p>
      <Link to="/" className="mt-8 font-semibold underline text-cyan-600 transition ease-in-out delay-200 hover:text-cyan-700">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPageNotFound;
