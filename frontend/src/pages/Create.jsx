import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import { PinData } from "../context/PinContext"; 

const Create = () => {
  const { addPin } = PinData(); 
  const [filePrev, setFilePrev] = useState(null);
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const inputRef = useRef(null);
  const navigate = useNavigate(); 

  const handleClick = () => {
    inputRef.current.click();
  };

  const changeFileHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFilePrev(URL.createObjectURL(selectedFile)); 
      setFile(selectedFile);
    }
  };

  const addPinHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("pin", pin);
    formData.append("file", file);
    try {
      addPin(formData, setFilePrev, setFile, setTitle, setPin, navigate);
      alert("Pin added successfully!");
    } catch (error) {
      console.error("Error adding pin:", error);
      setErrorMessage("Failed to add pin. Please try again.");
    }
  };

  return (
    <div className="bg-purple-100 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create a New Image</h1>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-80 h-auto p-6 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            {filePrev && (
              <img
                src={filePrev}
                alt="File Preview"
                className="mb-4 rounded-lg border-4 border-white shadow-md"
                key={filePrev}
              />
            )}
            <div className="flex flex-col items-center justify-center h-full cursor-pointer" onClick={handleClick}>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={changeFileHandler}
              />
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-full shadow-lg transition-transform duration-300 hover:shadow-xl">
                <FaPlus className="text-3xl text-indigo-600" />
              </div>
              <p className="text-gray-800">Choose a file</p>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              We recommend using high-quality .jpg files but less than 10MB.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-lg">
          <form className="w-full max-w-lg" onSubmit={addPinHandler}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-indigo-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
                Discription
              </label>
              <input
                type="text"
                id="pin"
                className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-indigo-500"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
              />
            </div>
                
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md transition-colors duration-300">
              Add 
            </button>

            {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
          </form>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        By uploading, you agree that the images are 
        <a 
          href="/terms-and-conditions" 
          className="text-indigo-600 hover:underline ml-1"
          target="_blank"
        >
          copyright-free and meet our terms and conditions.
        </a>
      </div>
    </div>
  );
};

export default Create;
