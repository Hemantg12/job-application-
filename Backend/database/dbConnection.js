import mongoose from "mongoose";
import chalk from "chalk";
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log(chalk.bgGreen("Connected to database successfully."));
    })
    .catch((err) => {
      console.log(chalk.red(`Some Error occured. ${err}`));
    });
};
