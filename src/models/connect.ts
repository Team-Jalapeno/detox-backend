import mongoose from 'mongoose';

export default async function connectDB(URL: string) {
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}