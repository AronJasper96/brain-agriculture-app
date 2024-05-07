import express from 'express';
import { verifyController } from '../controllers/verify-controller';
const router = express.Router();

router.get('/verify', verifyController);
module.exports = router;