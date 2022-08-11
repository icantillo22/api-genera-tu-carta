import { Router } from "express";
import * as resignationController from '../controllers/jobLetters/resignation.controllers'

const router = Router();

router.post('/resignation', resignationController.generateResignationLetter);

export default router