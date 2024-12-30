import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter từ Next.js
import AuthLayout from "@/components/AuthLayout";
import Image from "next/image";

export default function SignIn() {
  const [username, setUsername] = useState(""); // Username
  const [password, setPassword] = useState(""); // Password
  const [showPassword, setShowPassword] = useState(false); // Toggle mật khẩu
  const [error, setError] = useState<string | null>(null); // Error state
  const router = useRouter(); // Sử dụng router để điều hướng

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("/api/external-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Đăng nhập thành công:", data);

      // Lưu token vào localStorage
      localStorage.setItem("authToken", data.token);

      // Điều hướng đến Dashboard
      router.push("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected error occurred");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium text-gray-900">Sign in</h3>
        <p className="text-sm text-gray-500">
          Need an account?{" "}
          <a href="#" className="text-blue-600">
            Sign up
          </a>
        </p>
      </div>
      {error && (
        <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
      )}
      <div className="flex gap-4 mb-6">
      <button className="flex-1 py-2 px-4 bg-gray-100 border rounded-lg hover:bg-gray-200 flex items-center justify-center">
        <Image
          alt="Google"
          src="/media/brand-logos/google.svg" 
          className="w-4 h-4 mr-2"
          width={16} 
          height={16}
        />
        Use Google
      </button>
      <button className="flex-1 py-2 px-4 bg-gray-100 border rounded-lg hover:bg-gray-200 flex items-center justify-center">
        <Image
          alt="Apple"
          src="/media/brand-logos/apple-black.svg" 
          className="w-4 h-4 mr-2"
          width={16} 
          height={16}
        />
        Use Apple
      </button>
    </div>
      <div className="flex items-center gap-2 mb-6">
        <span className="border-t border-gray-300 w-full"></span>
        <span className="text-xs text-gray-500 uppercase">Or</span>
        <span className="border-t border-gray-300 w-full"></span>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-900 mb-2">
            Username
          </label>
          <input
            type="text" // Thay đổi sang input text
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
              Password
            </label>
            <a href="#" className="text-sm text-blue-600">
              Forgot Password?
            </a>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              placeholder="Enter Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </AuthLayout>
  );
}
