import express from 'express';
import util from './ping';
import check from './check';
import community from './community';

const router = express.Router();

router.use("/util", util);
router.use("/check", check);
router.use("/community", community);

export default router;