import React from 'react'
import { PinData } from '../context/PinContext'
import PinCard from '../compents/PinCard'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Account = ({user}) => {
    const logoutHandler = async()=>{
        try {
            const {data} = await axios.get("/api/user/logout") 
            toast.success(data.message)
            navigate("/login");
            setIsAuth(false);
            setUser([]);

            
        } catch (error) {
            toast.error(error.response.data.message)
            
        }

    }

    const {pins} = PinData();

    let userPins;

    if(pins){
        userPins = pins.filter((pin) => pin.owner === user._id);
    }
  return (
    
    <>
         <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex flex-col items-center">
            <div className="p-6 w-full max-w-md bg-white rounded-lg shadow-xl mt-10">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center shadow-lg">
                        <span className="text-3xl text-white font-bold">{user.name.slice(0, 1)}</span>
                    </div>
                    <h1 className="text-center text-3xl font-extrabold mt-4 text-gray-800">{user.name}</h1>
                    <p className="text-center text-gray-600 mt-2">{user.email}</p>
                    <div className="flex justify-center mt-4 space-x-2">
                        <button 
                            onClick={logoutHandler} 
                            className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition duration-300"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-6 w-full max-w-5xl flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Pins</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {
                        userPins.length > 0 ? (
                            userPins.map((e) => <PinCard key={e._id} pin={e} />)
                        ) : (
                            <p className="text-gray-500">No Pins Yet</p>
                        )
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Account
