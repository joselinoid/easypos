import {userRepository} from "../repositories/user.repository.js";
import {ApiError} from "../utils/responseHandler.js";
import {comparePassword} from "../utils/hash.js";
import {generateToken} from "../utils/token.js";

export const login = async ({ email, password }) => {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new ApiError(400, "Invalid email or password");

    const match = await comparePassword(password, user.password);
    if (!match) throw new ApiError(400, "Invalid email or password");

    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        },
        token: generateToken(user),
    };
};

export const getProfile = async (id) => {
    const user = await userRepository.findById(id);
    if (!user) throw new ApiError(404, "User not found");

    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
};