import React, { useState } from "react";
import mediafreezone from '../assets/mediafreezonelogo.png';
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import { PinData } from "../context/PinContext"; // Adjust the path as necessary

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // State for terms checkbox
  const { registerUser, btnLoading } = UserData();

  const navigate = useNavigate();
  const { fetchPins } = PinData();

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Alert if the terms checkbox is not selected
    if (termsAccepted) { 
      registerUser(name, email, password, navigate, fetchPins);
    } else {
      alert("Please accept the terms and conditions to register.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-center mb-4">
                <img src={mediafreezone} alt="mediafreezone" className="h-12 mb-4" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Register to MediaFreeZone</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="common-input w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="common-input w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="common-input w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="mb-4 flex items-start">
                    <input
                        type="checkbox"
                        id="terms"
                        className="mr-2 mt-1"
                        checked={termsAccepted}
                        onChange={() => setTermsAccepted(!termsAccepted)}
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link to="/terms-and-conditions" className="text-blue-600 hover:underline">
                            Terms and Conditions
                        </Link>
                    </label>
                </div>

                <button type="submit" className="common-btn w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-200" disabled={btnLoading || !termsAccepted}>
                    {btnLoading ? 'Registering...' : 'Register'}
                </button>
            </form>

            <div className="mt-6 text-center">
                <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-600">OR</span>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    <span>
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium text-blue-600 hover:underline">
                            Login
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
);
};

export default Register;
