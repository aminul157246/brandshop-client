import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500">Error 404</h1>
            <p className="text-gray-600">Page not found</p>
            <Link to="/" className="text-blue-500 hover:underline">
              Go back to home
            </Link>
          </div>
        </div>
      );
    };


export default ErrorPage;