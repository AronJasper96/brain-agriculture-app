import express from 'express';
import { verifyController } from '../controllers/verify-controller';
import { createRegister, updateRegister, deleteRegister, getAllRegister } from '../controllers/productor-controller';
const router = express.Router();
//Test Routes
router.get('/verify', verifyController);

//CRUD Routes
router.post('/create', createRegister);
router.get('/read', getAllRegister)
router.put('/update', updateRegister);
router.delete('/delete', deleteRegister);

module.exports = router;