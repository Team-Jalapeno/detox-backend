import express from 'express';

const router = express.Router();

router.get("/ping", (req, res, next) => {
    res.send("Pong!");
});

export default router;
