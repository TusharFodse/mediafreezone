import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported
import { PinData } from '../context/PinContext';
import PinCard from '../compents/PinCard'
import { UserData } from '../context/UserContext';

const UserProfile = ({ user: loggedInUser }) => {
    const params = useParams();
    const [user, setUser] = useState(null);
    const [isFollow, setIsFollow] = useState(false);
    const { pins } = PinData();

    // Fetch User data
    async function fetchUser() {
        try {
            const { data } = await axios.get(`/api/user/${params.id}`);
            setUser(data);
            setIsFollow(data.followers.includes(loggedInUser._id)); // Set follow state based on logged-in user's followers
        } catch (error) {
            console.log('Error fetching user data:', error);
        }
    }

    const {followUser}= UserData()


    // Follow/Unfollow Handler
    // async function followUser(userId, callback) {
    //     try {
    //         const { data } = await axios.post(`/api/user/follow`, { userId });
    //         callback(); // Re-fetch user data to update UI
    //     } catch (error) {
    //         console.log('Error following/unfollowing user:', error);
    //     }
    // }

    const followHandler = () => {
        followUser(user._id, fetchUser);
        setIsFollow(!isFollow); // Toggle follow/unfollow UI state
        
    };

    // Filter pins created by the user
    let userPins = [];
    if (user && pins) {  // Ensure user is not null
        userPins = pins.filter((pin) => pin.owner === user._id);
    }

    useEffect(() => {
        fetchUser();
    }, [params.id]); // Adding params.id as a dependency

    return (
        <div className="bg-gradient-to-r from-blue-200 to-purple-200 min-h-screen p-4">
            {user ? (
                <div className="flex flex-col items-center justify-center">
                    <div className="p-6 w-full bg-white rounded-lg shadow-lg">
                        {/* User Profile Picture */}
                        <div className="flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center border-4 border-blue-500">
                                {user.name && (
                                    <span className="text-3xl text-gray-700">
                                        {user.name.slice(0, 1)}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* User Name and Email */}
                        <h1 className="text-center text-3xl font-bold mt-4 text-blue-600">{user.name}</h1>
                        <p className="text-center text-gray-600 mt-2">{user.email}</p>

                        {/* Followers and Following */}
                        <p className="flex justify-center items-center text-center gap-3 text-gray-600 mt-2">
                            {user.followers && <p>{user.followers.length} Followers</p>}
                            {user.following && <p>{user.following.length} Following</p>}
                        </p>

                        {/* Follow/Unfollow Button */}
                        <div className="flex justify-center mt-4 space-x-2">
                            <button
                                onClick={followHandler}
                                className={`px-4 py-2 rounded transition-colors duration-300 ${
                                    isFollow ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                                } hover:bg-blue-600 focus:outline-none`}
                            >
                                {isFollow ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>

                        {/* Pins Created by the User */}
                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            {userPins && userPins.length > 0 ? (
                                userPins.map((pin) => <PinCard key={pin._id} pin={pin} />)
                            ) : (
                                <p className="text-gray-500">No Images Yet</p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-700">Loading user profile...</p>
            )}
        </div>
    );
};

export default UserProfile;
