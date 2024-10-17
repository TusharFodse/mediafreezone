import React from "react"
import { PinData } from "../context/PinContext"
import PinCard from "../compents/PinCard";

const Home =()=>{
    const {pins}=PinData();

    console.log(pins)
    return(
        <div className="bg-gradient-to-r from-blue-400 to-pink-400 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold text-center mb-8 text-white">
                        Welcome to the MediaFreezone Website
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4">
                        {pins && pins.length > 0 ? (
                            pins.map((e, i) => <PinCard key={i} pin={e} />)
                        ) : (
                            <p className="text-lg text-white">No Pins Yet</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home