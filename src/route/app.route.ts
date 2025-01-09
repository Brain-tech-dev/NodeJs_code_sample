import { Router } from "express";
import UserController from "../controller/User/User.controller";
class appRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.postRoutes()
    }
    postRoutes() {
        this.router.post(
            "/signup",
            UserController.signUp
        );
    }
}

export default new appRoutes().router;
