
import dotenv from 'dotenv';

dotenv.config();

import courseData from "./data/courses.js";
import connectDB from "./index.js";
import Course from "./models/Course.js";

connectDB();

const importData = async () => {
  try {
    await Course.deleteMany({});

    await Course.insertMany(courseData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
