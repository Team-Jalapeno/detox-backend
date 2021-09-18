import express from 'express';
import util from './ping';
import check from './check';

const router = express.Router();

router.use("/util", util);
router.use("/check", check);

export default router;