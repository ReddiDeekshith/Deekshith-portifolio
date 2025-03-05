
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md glass-panel rounded-2xl p-10 animate-scale-in">
        <h1 className="text-6xl font-bold mb-6 text-gradient">404</h1>
        <p className="text-xl text-white/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
