import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class JWT {
    constructor() {
        this.secret = process.env.JWT_SECRET;
    }

    generateToken(user) {
        return jwt.sign({ user }, this.secret, { expiresIn: "1h" });
    }

    verifyToken(token) {
        return jwt.verify(token, this.secret);
    }

    decodeToken(token) {
        return jwt.decode(token);
    }
}

export default new JWT();
