import { Router } from "express";
import {
    createClass,
    getCreatedClasses,
    getJoinedClasses,
    getJoinedStudents,
    joinClass,
    postAssignment
} from "../controllers/classroom.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { stud_verifyJWT } from "../middlewares/auth_stud.middleware.js";


const router = Router();

router.route('/create-class').post(verifyJWT, createClass);

router.route('/join-class').post(stud_verifyJWT,joinClass);

router.route('/post-assignment').patch()

router.route('/joined-classes').get(stud_verifyJWT,getJoinedClasses)

router.route('/created-classes').get(verifyJWT,getCreatedClasses)

router.route('/joined-students').post(getJoinedStudents)

export default router;

