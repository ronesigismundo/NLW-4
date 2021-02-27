import {Router} from 'express'
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
import { AnswarControler } from './controllers/AnswerController'
import { NpsController } from './controllers/NpsController';

const router = Router();

const userController = new UserController;
const surveysController = new SurveysController;
const sendMailController = new SendMailController;
const answarController = new AnswarControler;
const npsController = new NpsController

router.post('/users', userController.create)

router.get('/surveys', surveysController.show)
router.post('/surveys', surveysController.create)

router.post('/sendMail', sendMailController.execute)

router.get('/answers/:value', answarController.execute)

router.get('/nps/:survey_id', npsController.execute) 

export { router }