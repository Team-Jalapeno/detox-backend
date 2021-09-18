import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
    contentType: {
        type: String, // Either "text", "image", or "video"
        required: true
    },
    pageId: {
        type: new mongoose.Types.ObjectId(),
        required: true,
    },
    score: {
        type: Number,
        default: 0,
        required: true,
    },
    selector: {
        type: String,
        required: true,
    },
    users: {
        type: [String],
        default: [],
    }
});

const ReportModel = mongoose.model('Report', ReportSchema);

export default ReportModel;
