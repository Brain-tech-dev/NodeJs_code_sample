import { Request, Response } from "express";
import { signupSchema } from "../../validators/User.validation";
import UserService from "../../service/User/User.service";
class AuthController {
    async signUp(req: Request, res: Response): Promise<Response> {
        const { error } = signupSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }
        try {
            const data = await UserService.signUp(req)
            return res.status(201).json(data);
        } catch (error) {
            console.error("Error during user signup:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
}

export default new AuthController();
