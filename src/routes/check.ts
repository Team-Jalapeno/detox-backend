import express from 'express';
import { google } from 'googleapis';

const router = express.Router();

const DISCOVERY_URL = 'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';

router.post("/text", async (req, res, next) => {
    console.log(req.body);
    const textData = req.body.text.toString();

    const client = (await google.discoverAPI(DISCOVERY_URL)) as any;

    const analyzeRequest = {
        comment: {
            text: textData,
        },
        requestedAttributes: {
            TOXICITY: {},
        },
    };

    console.log(client.comments.analyze(
        {
            key: process.env.PERSPECTIVE_API_KEY,
            resource: analyzeRequest,
        }));
    res.send("OK");
});

export default router;
