import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI: string = process.env.DATABASE_URL || '';

const connectDb = async (): Promise<void> => {
  try {
    const options: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    await mongoose.connect(MONGODB_URI, options);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDb;
