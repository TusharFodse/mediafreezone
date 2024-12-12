# MediaFreeZone

MediaFreeZone is a web application that provides access to non-copyrighted photos, allowing users to browse and download high-quality images for free. The platform is built using the MERN stack (MongoDB, Express, React, Node.js) and offers an easy and efficient way to find copyright-free images for personal or commercial use.

## Features
- Browse a large collection of non-copyrighted images.
- Search for images by keywords.
- Download high-quality images without any copyright restrictions.
- User-friendly interface for easy navigation.
- Fast and responsive design.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB (MongoDB Atlas)
- **Image Store**:cloudinary (Cloude Storage)
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Vercel (Frontend and Backend)

## Installation

To run the project locally, follow these steps:

### Prerequisites:
- Node.js
- npm (Node Package Manager)
- MongoDB (for local database setup, or use MongoDB Atlas for cloud)
- Account on cloudinary and get Api Key.

### Steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-github-username>/mediafreezon](https://github.com/TusharFodse/mediafreezone)
   cd mediafreezone
   ```

2. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

4. Set up environment variables:
   - In the `backend` folder, create a `.env` file and add the following:
     ```env
     MONGO_URI=<your-mongodb-uri>
     JWT_SEC=<your-jwt-secret>
     ```

5. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

6. Start the frontend server:

   ```bash
   cd frontend
   npm start
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.


## Contributing

Contributions are welcome! If you'd like to improve the project, feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements
- The project utilizes free and non-copyrighted images from various sources.
- Special thanks to the open-source community for their contributions.
