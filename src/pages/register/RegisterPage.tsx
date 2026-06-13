import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";

import { register } from "../../entities/user/api/authApi";
import toast from "react-hot-toast";
import Spinner from "../../shared/ui/Spinner";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [userName, setUserName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await register({
        userName,
        email,
        password,
      });

      toast.success("Account created successfully!");
      navigate("/login");
    } catch {
      toast.error("Registration failed");
      setError(
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input
            placeholder="Username"
            value={userName}
            onChange={e =>
              setUserName(e.target.value)
            }
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e =>
              setEmail(e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e =>
              setPassword(e.target.value)
            }
          />

          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          <Button type="submit" disabled={loading}>
            {loading ? <Spinner /> : "Register"}
          </Button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}