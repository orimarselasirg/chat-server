import { User } from "../../models/Auth/User.js";
import { MESSAGES } from "../../utils/constant.js";
import bcrypt from "bcrypt";
import JWT from "../../utils/jwt.js";

export const registerUser = async (user) => {
    const { name, email, password } = user;
    try {
        const userFound = await findUser(email);
        if (userFound) {
            throw new Error(MESSAGES.ERROR.USER_ALREADY_EXISTS);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashedPassword });
        const token = JWT.generateToken(user);

        return {
            message: MESSAGES.USER.CREATED,
            user,
            token
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const loginUser = async (user) => {
    const { email, password } = user;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error(MESSAGES.ERROR.USER_NOT_FOUND);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error(MESSAGES.ERROR.INVALID_CREDENTIALS);
        }

        const token = JWT.generateToken(user);
        return {
            message: MESSAGES.USER.LOGGED_IN,
            user,
            token
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const findUser = async (user) => {
    const { email } = user;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return null
        }

        return {
            message: MESSAGES.USER.FOUND,
            user
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
};