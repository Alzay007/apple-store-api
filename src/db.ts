import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

const dbURI = process.env.MONGO_URI as string;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(dbURI, {
      autoIndex: true,
    } as ConnectOptions);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;

