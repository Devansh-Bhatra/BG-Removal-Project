import {express} from 'express';
import {clerkWebHooks} from '../controllers/clerkWebHooks.js';
import {userController} from '../controllers/userController.js';

const userRouter=express.Router()
userRouter.post('/webhooks',clerkWebHooks)
export default userRouter