// // src/components/Footer.jsx

// import React from "react";

// const creators = [
//     {
//         name: "Alice Smith",
//         role: "Frontend Developer",
//         // image: "https://via.placeholder.com/150",
//         linkedin: "https://www.linkedin.com/in/alicesmith",
//         github: "https://github.com/alicesmith",
//     },
//     {
//         name: "Bob Johnson",
//         role: "Backend Developer",
//         image: "https://via.placeholder.com/150",
//         linkedin: "https://www.linkedin.com/in/bobjohnson",
//         github: "https://github.com/bobjohnson",
//     },
//     {
//         name: "Charlie Brown",
//         role: "UI/UX Designer",
//         image: "https://via.placeholder.com/150",
//         linkedin: "https://www.linkedin.com/in/charliebrown",
//         github: "https://github.com/charliebrown",
//     },
// ];

// const Footer = () => {
//     return (
//         <footer className="bg-gray-800 text-white py-6 mt-6">
//             <div className="max-w-7xl mx-auto px-4">
//                 <h2 className="text-xl font-bold text-center mb-4">Website Creators</h2>
//                 <div className="flex flex-wrap justify-center">
//                     {creators.map((creator, index) => (
//                         <div
//                             key={index}
//                             className="bg-gray-700 rounded-lg shadow-lg p-4 m-2 w-64 flex flex-col items-center"
//                         >
//                             <img
//                                 src={creator.image}
//                                 alt={creator.name}
//                                 className="rounded-full h-24 w-24 mb-2"
//                             />
//                             <h3 className="text-lg font-semibold">{creator.name}</h3>
//                             <p className="text-sm mb-2">{creator.role}</p>
//                             <div className="flex space-x-2">
//                                 <a
//                                     href={creator.linkedin}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-blue-400 hover:underline"
//                                 >
//                                     LinkedIn
//                                 </a>
//                                 |
//                                 <a
//                                     href={creator.github}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-blue-400 hover:underline"
//                                 >
//                                     GitHub
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             </footer>    );
// };

// export default Footer;
