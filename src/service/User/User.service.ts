import UserModel from "../../model/User";
import { UserInterface } from "../../interface/user.interface";
import Auth from "../../utiles/auth.utiles";
class AuthService {
    async signUp(req: any) {
        const { name, email, password } = req.body;
        try {
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return {
                    success: false,
                    message: "Email already in use",
                }
            }
            const hashedPassword = await Auth.encryptPassword(password);
            const newUser: UserInterface = new UserModel({
                name,
                email,
                password: hashedPassword,
            });
            await newUser.save();
            return {
                success: true,
                message: "User created successfully",
            }

        } catch (error: any) {
            console.error("Error during user signup:", error);
            return {
                success: false,
                message: error.message,
            }
        }
    }

}
export default new AuthService();