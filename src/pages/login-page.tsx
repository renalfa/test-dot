import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";
import Input from "../components/ui/input";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (login(username, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="w-full h-dvh flex justify-center items-center bg-neutral-100">
      <div className="bg-white flex flex-col p-4 w-full max-w-sm gap-4 rounded-xl">
        <h1 className="text-2xl font-bold">Login</h1>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        {error && <p className="text-red-500 text-sm italic ml-1">* {error}</p>}
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
