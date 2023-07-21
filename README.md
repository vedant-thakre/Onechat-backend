# Chat-Application

## Description

Chat App is a web-based application that allows users to chat with each other in real-time. It provides a simple and intuitive user interface for sending and receiving messages, as well as various features like text formatting and emoji support.

## Features

- Real-time messaging using Socket.IO for instant communication.
- User authentication and authorization with JWT tokens.
- Group chat functionality for multiple users to chat together.
- Text formatting options for bold, italic, strikethrough, links, and lists.
- Emoji support for adding expressive elements to messages.

## Technologies Used

- React.js for building the frontend user interface.
- Chakra UI for designing the UI components.
- Express.js and Node.js for creating the backend server.
- MongoDB as the database to store user and chat data.
- Socket.IO for handling real-time communication between clients and server.
- axios for making API requests.
- Lottie for displaying typing animation.
- emoji-mart for adding emoji functionality.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/chat-app.git

2. Install the dependencies for both the frontend and backend:
cd chat-app
cd frontend
npm install
cd ../backend
npm install
3. Create a .env file in the backend directory and set the required environment variables:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4. Start the development server for both frontend and backend:
cd frontend
npm start
# Open a new terminal
cd ../backend
npm start


Sure! Below is a sample README file for your GitHub project. Please customize it with the actual information about your project:

markdown
Copy code
# Chat App

![Chat App Screenshot](screenshot.png)

## Description

Chat App is a web-based application that allows users to chat with each other in real-time. It provides a simple and intuitive user interface for sending and receiving messages, as well as various features like text formatting and emoji support.

## Features

- Real-time messaging using Socket.IO for instant communication.
- User authentication and authorization with JWT tokens.
- Group chat functionality for multiple users to chat together.
- Text formatting options for bold, italic, strikethrough, links, and lists.
- Emoji support for adding expressive elements to messages.

## Technologies Used

- React.js for building the frontend user interface.
- Chakra UI for designing the UI components.
- Express.js and Node.js for creating the backend server.
- MongoDB as the database to store user and chat data.
- Socket.IO for handling real-time communication between clients and server.
- axios for making API requests.
- Lottie for displaying typing animation.
- emoji-mart for adding emoji functionality.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
Install the dependencies for both the frontend and backend:
bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Create a .env file in the backend directory and set the required environment variables:
makefile
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the development server for both frontend and backend:
bash
Copy code
cd frontend
npm start
# Open a new terminal
cd ../backend
npm start

Access the application in your web browser at http://localhost:3000.

Usage
Register or login to access the chat application.
Click on a user or group chat to start a conversation.
Use the input field to type and send messages.
Apply text formatting options by clicking the respective buttons.
Press "Enter" to send a message, or use the "Send" button.
Enjoy real-time chatting with other users!
