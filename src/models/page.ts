import mongoose from 'mongoose';


const PageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true,
    },
    score: {
        type: Number,
        default: 0,
    },
});

const PageModel = mongoose.model('Page', PageSchema);

export default PageModel;

