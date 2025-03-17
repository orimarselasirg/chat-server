export const MESSAGES = {
    USER: {
        CREATED: "User created successfully",
        UPDATED: "User updated successfully",
        DELETED: "User deleted successfully",
        NOT_FOUND: "User not found",
    },
    AUTH: {
        INVALID_CREDENTIALS: "Invalid credentials",
        UNAUTHORIZED: "Unauthorized",
        FORBIDDEN: "Forbidden",
        NOT_FOUND: "Not found",
        INTERNAL_SERVER_ERROR: "Internal server error",
    },
    ERROR: {
        USER_ALREADY_EXISTS: "User already exists",
        USER_NOT_FOUND: "User not found",
        INVALID_CREDENTIALS: "Invalid credentials",
        UNAUTHORIZED: "Unauthorized",
        FORBIDDEN: "Forbidden",
        NOT_FOUND: "Not found",
        INTERNAL_SERVER_ERROR: "Internal server error",
    }
};

export const VERSION = {
    V1: "/api/v1",
};

export const SOCKET_EVENTS = {
    JOIN_CHAT: "join_chat",
    LEAVE_CHAT: "leave_chat",
    STOP_TYPING: "stop_typing",
    USER_JOINED: "user_joined",
    USER_LEFT: "user_left",
    USERS_COUNT: "users_count",
    CHAT: "chat",
    TYPING: "typing",
    DISCONNECT: "disconnect",
    CONNECT: "connection",
};

export const SOCKET_ERRORS = {
    AUTHENTICATION_ERROR: "Authentication error",
};

export const DATABASE_MESSAGES = {
    CONNECTION_ERROR: "Connection error",
    CONNECTION_SUCCESS: "Connected to database",
    SERVER_ERROR: "Server error",
    SERVER_SUCCESS: "Server started at port {{port}}",
};

export const PRINCIPAL_ROUTES = {
    AUTH: "/auth",
};