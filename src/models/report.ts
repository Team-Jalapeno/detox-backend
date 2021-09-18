import mongoose from 'mongoose';
import { DocSchema } from '../utils/interface';

const ReportSchema = new mongoose.Schema({
    contentType: {
        type: String, // Either "text", "image", or "video"
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true,
    },
    pageScore: {
        type: Number,
        default: 0,
    },
    vote: {
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

const ReportModel = mongoose.model<DocSchema>('Report', ReportSchema);

export default ReportModel;
