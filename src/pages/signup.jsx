import { useNavigate } from "react-router-dom";
import BackgroundMotion from '../components/Background.jsx'; 
import Header from '../components/Header.jsx';

export default function SignUpCard() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white px-4">
       {/* 🔮 Animated background waves */}
            <Header/>
            <BackgroundMotion/>
      
      <div
        className="z-10 w-full max-w-sm p-6 sm:p-7 rounded-[20px] border border-[#565462] shadow-xl relative bg-gradient-to-br from-indigo-400/60 via-purple-300/60 to-indigo-700/40">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-neutral-800 font-montserrat">
          Welcome to Social.com
        </h1>
        <p className="text-center text-gray-700 font-medium mt-1 mb-5 text-sm font-montserrat">
          Please Sign up to continue
        </p>

        {/* Email Input */}
        <div className="mb-3">
          <label className="block mb-1 text-sm font-semibold text-black">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[34px] px-3 bg-white border border-[#565462] shadow-[0_4px_6px_rgba(0,0,0,0.15)] 
            rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder-gray-500 transition-all"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-black">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-[34px] px-3 bg-white border border-[#565462] shadow-[0_4px_6px_rgba(0,0,0,0.15)] 
            rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 placeholder-gray-500 transition-all"
          />
        </div>

        {/* Register Button */}
        <div className="flex justify-center mb-3">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-indigo-900 hover:scale-[1.05] transition duration-200 ease-in-out">
            Register
          </button>
        </div>

        {/* Or Divider */}
        <p className="text-center text-sm font-semibold text-neutral-700 my-2">or</p>

        {/* Google Button */}
        <div className="flex justify-center mb-3">
          <button className="flex items-center gap-2 bg-white text-gray-800 border border-gray-300 px-4 py-1.5 rounded-md text-sm font-medium shadow-md hover:bg-gray-100 hover:scale-[1.03] hover:shadow-lg transition-all">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-4 h-4"
            />
            Continue With Google
          </button>
        </div>

        {/* Redirect to Login */}
        <p className="text-sm text-center font-medium text-black">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-700 font-semibold cursor-pointer hover:underline hover:text-indigo-800 transition"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}
