import express from 'express';
import util from './ping';

const router = express.Router();

router.use("/util", util);

export default router;