import { Router } from "express";



import { Auth } from "./middlewares/auth.js";

import * as rh from "./requesthandler.js";


const router = Router()

router.route("/register").post(rh.register);
router.route("/login").post(rh.login);

router.route("/profile").get(Auth,rh.profile);


export default router;




