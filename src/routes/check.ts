import express from 'express';
import { google } from 'googleapis';

const router = express.Router();

const DISCOVERY_URL = 'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';

router.post("/text", async (req, res, next) => {
    const textData = req.body.text.toString();

    const client = (await google.discoverAPI(DISCOVERY_URL)) as any;

    const analyzeRequest = {
        comment: {
            text: textData,
        },
        requestedAttributes: {
            TOXICITY: {},
            IDENTITY_ATTACK: {},
            INSULT: {},
            PROFANITY: {},
            THREAT: {},
            SEXUALLY_EXPLICIT: {},
            FLIRTATION: {},
        },
        languages: ["en"]
    };
    const scores: {[type: string]: any} = {};
    try {
    const resp = (await client.comments.analyze(
        {
            key: process.env.PERSPECTIVE_API_KEY,
            resource: analyzeRequest,
        })).data;
    

    for (const attribute in resp['attributeScores']) {
        scores[attribute] = resp['attributeScores'][attribute]['summaryScore']['value'];
    }
    } catch (err) {
        return res.json({
            success: false,
        });
    }

    res.json({
        success: true,
        data: scores,
    });
});

export default router;
