import mongoose, { ConnectOptions } from 'mongoose';

const dbURI = 'mongodb+srv://andriizaitsevwork:FxU9T8g2orSpkRdk@cluster0.pje3b.mongodb.net/apple_store?retryWrites=true&w=majoritynpm';

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

