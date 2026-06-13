import { Link } from "react-router-dom";

import { removeToken } from "../../shared/lib/auth";
import { useAuth } from "../../app/providers/AuthProvider";

export default function Navbar() {
  const {user, setUser} = useAuth();

  const handleLogout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          BlogApp
        </Link>

        <nav className="flex items-center gap-4">
          {user && (
            <Link
              to="/create-article"
              className="text-gray-700 hover:text-blue-600"
            >
              Create
            </Link>
          )}

          {user ? (
            <>
              <span className="text-gray-700">
                👤 {user.userName}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}