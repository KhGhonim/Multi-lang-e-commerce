import express from "express";
import { userExist } from "../Controllers/userExistContoller.js";
import { CreatUser } from "../Controllers/CreatUserController.js";
import { Userlog } from "../Controllers/UserlogController.js";
import { logout } from "../Controllers/LogOutController.js";
const router = express.Router(); 

router.post("/auth/userExist", userExist );
router.post("/auth/register", CreatUser );
router.post("/auth/login", Userlog );
router.post("/auth/logout", logout );



export default router