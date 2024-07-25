# Blogging Website

A modern blogging platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). This platform allows users to create, read, update, and delete blog posts, and interact with other users' posts through comments and likes.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction

This blogging website is designed to provide a seamless and engaging platform for users to share their thoughts, ideas, and stories with a wider audience. Users can create accounts, write blog posts, comment on other posts, and engage with the community through likes and shares.

## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Create/Edit/Delete Posts:** Users can create, edit, and delete their own blog posts.
- **Comments:** Users can comment on posts to engage in discussions.
- **Likes:** Users can like posts to show their appreciation.
- **Profile Management:** Users can manage their profile information.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technologies Used

This project is built using the following technologies:

### Frontend:
- React <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" style="vertical-align:middle">
- CSS <img src="https://img.icons8.com/ultraviolet/40/000000/css.png" alt="CSS" style="vertical-align:middle">
- JavaScript <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" style="vertical-align:middle">

### Backend:
- Node.js <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" style="vertical-align:middle">
- Express.js <img src="https://img.icons8.com/ultraviolet/40/000000/api-settings.png" alt="Express.js" style="vertical-align:middle">
- MongoDB <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" style="vertical-align:middle">

## Installation

To install and run the project locally, follow these steps:

### Prerequisites
- Node.js installed
- MongoDB Atlas Account

### Backend Setup

1. Clone the repository: `git clone https://github.com/eshaalal/blogging-mern.git`
2. Navigate to the `backend` directory: `cd blogging-website-backend`
3. Install dependencies: `npm install`
4. Configure environment variables:
   - Create a `.env` file in the `backend` directory with the following content:
     ```env
     PORT=3001 or any of your choice
     DATABASE_URI=your_mongodb_connection_string
     ACCESS_TOKEN_SECRET=your_jwt_secret
     ```
5. Start the backend server: `npm run dev`

### Frontend Setup

1. Navigate to the `frontend` directory: `cd blogging-app-frontend`
2. Install dependencies: `npm install`
3. Start the frontend development server: `npm run dev`

## Usage

1. Ensure MongoDB is running.
2. Start the backend server: `npm run dev` (from the `backend` directory)
3. Start the frontend development server: `npm run dev` (from the `frontend` directory)

Visit `http://localhost:3001` in your web browser to access the blogging website.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
- Fork the repository
- Create your feature branch (`git checkout -b feature/your-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin feature/your-feature`)
- Create a new pull request

## Contact

For any inquiries or support, please contact us at [eshalal9693@gmail.com](mailto:eshalal9693@gmail.com)
