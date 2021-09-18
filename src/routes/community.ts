import express from 'express';

const router = express.Router();

router.get("/report", (req, res, next) => {
    const url = req.body.url;
    // get all reports for a page
});

router.post("/report", (req, res, next) => {
    const url = req.body.url;
    const vote = parseFloat(req.body.vote);
    const selector = req.body.selector.toString();
    const userId = req.body.userId.toString();

    // Create a new report if doesnt exist
    // If exists, make sure that user hasnt already voted
    // Update score based on formula (for now mean)
});

export default router;
