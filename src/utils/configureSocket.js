import { Server } from "socket.io";
import JWT from "../utils/jwt.js";
import { SOCKET_EVENTS, SOCKET_ERRORS } from "./constant.js";


const configureSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.use((socket, next) => {
        const token = socket.handshake.auth.token;
        if (!token) {
            return next(new Error(SOCKET_ERRORS.AUTHENTICATION_ERROR));
        }

        try {
            const decoded = JWT.verifyToken(token);
            socket.user = decoded.user;
            next();
        } catch (error) {
            next(new Error(SOCKET_ERRORS.AUTHENTICATION_ERROR));
        }
    });

    const users = new Map();

    io.on(SOCKET_EVENTS.CONNECT, (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on(SOCKET_EVENTS.CHAT, (message) => {
            io.emit(SOCKET_EVENTS.CHAT, {
                id: socket.id,
                user: socket.user.name,
                message: message
            });
        });

        socket.on(SOCKET_EVENTS.TYPING, () => {
            socket.broadcast.emit(SOCKET_EVENTS.TYPING, {
                id: socket.id,
                user: socket.user
            });
        });

        socket.on(SOCKET_EVENTS.STOP_TYPING, () => {
            socket.broadcast.emit(SOCKET_EVENTS.STOP_TYPING, {
                id: socket.id,
                user: socket.user
            });
        });

        socket.on(SOCKET_EVENTS.JOIN_CHAT, (user) => {
            users.set(socket.id, user);
            io.emit(SOCKET_EVENTS.USER_JOINED, user);
            io.emit(SOCKET_EVENTS.USERS_COUNT, users.size);
        });

        socket.on(SOCKET_EVENTS.LEAVE_CHAT, () => {
            const user = users.get(socket.id);
            if (user) {
                users.delete(socket.id);
                io.emit(SOCKET_EVENTS.USER_LEFT, user);
                io.emit(SOCKET_EVENTS.USERS_COUNT, users.size);
            }
        });

        socket.on(SOCKET_EVENTS.DISCONNECT, () => {
            const user = users.get(socket.id);
            if (user) {
                users.delete(socket.id);
                io.emit(SOCKET_EVENTS.USER_LEFT, user);
                io.emit(SOCKET_EVENTS.USERS_COUNT, users.size);
            }
        });
    });

    return io;
};

export default configureSocket;