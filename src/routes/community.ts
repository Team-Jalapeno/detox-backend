import express from "express";
import mongoose from "mongoose";
import calculateScore from "../utils/calculateScore";
import ReportModel from "../models/report";
import { notFound, serverError } from "../utils/expressResponses";

const router = express.Router();

router.get("/report", async (req, res, next) => {
  try {
    const url = req.body.url;
    const reports = await ReportModel.find({ url: url });

    if (!reports) {
      return notFound(res, "Error: reports not found");
    }

    return res.send({ reports });
  } catch (e) {
    return serverError(res, e.message);
  }
});

router.post("/report", async (req, res, next) => {
  const url = req.body.url;
  const contentType = req.body.contentType;
  const vote = parseFloat(req.body.vote);
  const selector = req.body.selector.toString();
  const userId = req.body.userId.toString();

  try {
    const report = await ReportModel.findOne({ url: url });

    // Create a new report if doesnt exist
    if (!report) {
      const newReport = await ReportModel.create({
        contentType: contentType,
        url: url,
        pageScore: vote,
        vote: vote,
        selector: selector,
        $push: { users: userId },
      });
      return res.send({ newReport });
    }

    // If exists, make sure that user hasnt already voted
    if (report.users.length !== 0 && !report.users.includes(userId)) {

    // Update score based on formula (for now mean)
      const newScore = calculateScore(report.pageScore, vote, report.users.length);
      const newReport = await ReportModel.create({
        contentType: contentType,
        url: url,
        pageScore: vote,
        vote: vote,
        selector: selector,
        $push: { users: userId },
      });
      return res.send({ newReport });
    }
  } catch (e) {
    return serverError(res, e.message);
  }
});

export default router;
