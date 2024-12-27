import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter từ Next.js
import AuthLayout from "@/components/AuthLayout";

export default function SignIn() {
    const [username, setUsername] = useState(""); // Sử dụng username
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // Toggle mật khẩu
    const [error, setError] = useState<string | null>(null);
    const router = useRouter(); // Khởi tạo router

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
            localStorage.setItem("authToken", data.token); // Lưu token để sử dụng sau này

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
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
                Sign in
            </h2>
            {error && (
                <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
            )}
            <p className="text-center text-sm text-gray-500 mb-6">
                Need an account? <a href="#" className="text-blue-600">Sign up</a>
            </p>
            <div className="flex justify-between items-center gap-4 mb-6">
                <button className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg">
                    Use Google
                </button>
                <button className="flex-1 py-2 px-4 bg-black text-white rounded-lg">
                    Use Apple
                </button>
            </div>
            <div className="text-center text-gray-400 mb-4">OR</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm text-gray-600 mb-1">
                        Username
                    </label>
                    <input
                        type="text" // Định dạng text cho username
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"} // Toggle mật khẩu
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                        >
                            {showPassword ? "🙈" : "👁"} {/* Biểu tượng */}
                        </button>
                    </div>
                </div>
                <a href="#" className="text-sm text-blue-600 float-right mt-1">
                    Forgot Password?
                </a>
                <div className="mb-4 flex items-center">
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
