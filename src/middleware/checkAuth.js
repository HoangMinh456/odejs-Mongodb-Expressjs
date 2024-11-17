import jwt from "jsonwebtoken";
import User from "../models/user";
export const checkAuth = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization']
        const token = authorizationHeader.slice(7)
        // const token = authHeader;
        // console.log(token)
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const user = await jwt.verify(token, "123456", async (error, decoded) => {
            // console.log(error);
            // console.log('decoded: ', decoded)
            if (error && error.name === "TokenExpiredError") {
                return res.status(401).json({ error: "Hết hạn token" });
            }
            if (error && error.name === "JsonWebTokenError") {
                return res.status(401).json({ error: "Token không hợp lệ" });
            }
            return await User.findOne({ _id: decoded.userId });
        });
        // console.log(user)
        if (user.role !== "admin") {
            return res.status(401).json({ error: "Không phải admin" });
        }
        next();
    } catch (error) {
        // console.log('loi: ', error);
    }
};
