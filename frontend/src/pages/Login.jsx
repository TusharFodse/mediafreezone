import React, { useState } from "react"
import mediafreezone from "C:/Tushar/Printest clone/frontend/src/assets/mediafreezonelogo.png"
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";
import { PinData } from "../context/PinContext";
const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {loginUser, btnLoading }=UserData();
    const navigate =useNavigate();

    const {fetchPins}=PinData()


  

    const submitHandeler=e=>{
        e.preventDefault()
      loginUser(email,password,navigate,fetchPins)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-4">
                    <img src={mediafreezone} alt="mediafreezone" className="h-12 mb-4" />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login to see more</h2>
                <form onSubmit={submitHandeler}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="common-input w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="common-btn w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-200">
                        {btnLoading ? 'Logging in...' : 'Log in'}
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
                            Not on Pinterest yet? 
                            <Link to="/register" className="font-medium text-blue-600 hover:underline"> Register</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
