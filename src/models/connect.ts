import mongoose from "mongoose";

export default async function connectDB(URL: string) {
  await mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() =>
      console.info({
        Message: "DB connected successfully",
        error: "Value: null",
      })
    )
    .catch((e) => {
      console.error({ Message: "DB connection failed", error: e.toString() });
      process.exit(1);
    });
}
