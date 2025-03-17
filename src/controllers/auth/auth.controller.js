import { registerUser, loginUser } from "../../services/auth/auth.service.js";

export const register = async (req, res) => {
    try {
        const response = await registerUser(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const response = await loginUser(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const findUser = async (req, res) => {
    try {
        const response = await findUser(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
