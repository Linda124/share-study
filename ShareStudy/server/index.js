import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from "./routes/user.js";
import courseRoutes from "./routes/courseRoutes.js";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};
connectDB();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use("/user", userRouter);
app.use('/courses',courseRoutes);

app.get('/', (req, res) => {
  res.send('Hello to share&study');
});

//const CONNECTION_URL =  'mongodb+srv://neha-5678:linehanus2645s&s@cluster0.5hiaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 5000 ;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default connectDB;