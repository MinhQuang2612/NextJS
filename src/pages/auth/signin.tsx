import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AuthLayout from "@/components/AuthLayout";
import Image from "next/image";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://api.gw-sms.com/api/portal/auth/login", {
        username,
        password,
      }, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      // Lưu thông tin token nếu đăng nhập thành công
      localStorage.setItem("authToken", response.data.token);

      localStorage.setItem("authData", JSON.stringify(response.data.data));
      
      router.push("/dashboard");

    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || "Login failed");
      } else {
        setError("Unexpected error occurred");
      }
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthLayout title="Trang đăng nhập">
      <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
        <style jsx>{`
          .page-bg {
            background-image: url("/media/images/2600x1200/bg-10.png");
          }
        `}</style>
        <div className="card max-w-[370px] w-full">
          <form
            className="card-body flex flex-col gap-5 p-10"
            id="sign_in_form"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-2.5">
              <h3 className="text-lg font-medium text-gray-900 leading-none mb-2.5">Sign in</h3>
              <div className="flex items-center justify-center font-medium">
                <span className="text-2sm text-gray-700 me-1.5">Need an account?</span>
                <a className="text-2sm link" href="/sign-up">Sign up</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a className="btn btn-light btn-sm justify-center" href="#">
                <Image
                  alt="Google Logo"
                  src="/media/brand-logos/google.svg"
                  width={16}
                  height={16}
                />
                Use Google
              </a>
              <a className="btn btn-light btn-sm justify-center" href="#">
                <Image
                  alt="Apple Logo"
                  src="/media/brand-logos/apple-black.svg"
                  width={16}
                  height={16}
                  className="dark:hidden"
                />
                <Image
                  alt="Apple Logo"
                  src="/media/brand-logos/apple-white.svg"
                  width={16}
                  height={16}
                  className="light:hidden"
                />
                Use Apple
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="border-t border-gray-200 w-full"></span>
              <span className="text-2xs text-gray-500 font-medium uppercase">Or</span>
              <span className="border-t border-gray-200 w-full"></span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="form-label font-normal text-gray-900">Username</label>
              <input
                className="input"
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-1">
                <label className="form-label font-normal text-gray-900">Password</label>
                <a className="text-2sm link shrink-0" href="/reset-password">Forgot Password?</a>
              </div>
              <div className="input flex items-center">
                <input
                  name="user_password"
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn btn-icon"
                  data-toggle-password-trigger="true"
                  type="button"
                  onClick={togglePassword}
                >
                  <i className={`ki-filled ki-eye text-gray-500 ${showPassword ? "hidden" : "block"}`}></i>
                  <i className={`ki-filled ki-eye-slash text-gray-500 ${showPassword ? "block" : "hidden"}`}></i>
                </button>
              </div>
            </div>
            <label className="checkbox-group">
              <input className="checkbox checkbox-sm" type="checkbox" />
              <span className="checkbox-label">Remember me</span>
            </label>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button className="btn btn-primary flex justify-center grow">Sign In</button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
