# Chat Socket - Real-Time Chat Application


## Description


Chat Socket is a real-time chat application that allows users to register, log in, and communicate instantly. The application uses Socket.io for real-time communication and MongoDB for data storage.

## Installation

```bash
# Clone the repository
git clone https://github.com/user/chat-socket.git
cd chat-socket

# Install dependencies
npm install
```

## Configuration

Create a `.env` file in the root of the project with the following variables:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/chat-socket
JWT_SECRET=your_jwt_secret_key
```

## Execution

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Features

- **User Authentication**
  - Registration of new users
  - Login with JWT token

- **Real-time Chat**
  - Instant message sending and receiving
  - User typing indicator
  - Notifications when users join/leave the chat
  - Connected users counter

## Technologies Used

- **Backend**
  - Node.js
  - Express
  - Socket.io
  - JWT (JSON Web Tokens)
  - Bcrypt

- **Database**
  - MongoDB
  - Mongoose

## Project Structure

```
chat-socket/
├── index.js                 # Application entry point
├── package.json            
├── src/
│   ├── controllers/         # Application controllers
│   │   └── auth/            # Authentication controllers
│   ├── database/            # Database configuration
│   ├── middleware/          # Custom middleware
│   ├── models/              # Mongoose models
│   │   └── Auth/            # Authentication-related models
│   ├── routes/              # API routes
│   │   └── auth/            # Authentication routes
│   ├── services/            # Business logic
│   │   └── auth/            # Authentication services
│   └── utils/               # Utilities and constants
```

## API Endpoints

### Authentication

- **POST** `/api/v1/auth/register` - Register a new user
  - Body: `{ "name": "string", "email": "string", "password": "string" }`

- **POST** `/api/v1/auth/login` - Log in
  - Body: `{ "email": "string", "password": "string" }`

- **GET** `/api/v1/auth/find-user` - Get current user information
  - Headers: `Authorization: token`

## Socket.io Events

- `join_chat` - Join the chat
- `leave_chat` - Leave the chat
- `chat` - Send a message
- `typing` - Indicate that the user is typing
- `stop_typing` - Indicate that the user has stopped typing

## Contribution

If you wish to contribute to this project, please fork it and submit a pull request with your changes.

## License

This project is licensed under the ISC license.

## Author

- [@Ramiro Grisales](https://github.com/orimarselasirg)