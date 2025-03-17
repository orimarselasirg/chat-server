export const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: MESSAGES.ERROR.UNAUTHORIZED });
    }

    const decodedToken = JWT.verifyToken(token);
    if (!decodedToken) {
        return res.status(401).json({ message: MESSAGES.ERROR.UNAUTHORIZED });
    }

    req.user = decodedToken.user;
    next();
};
