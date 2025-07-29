import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MongoDbUrl)

        console.log('Connected to MongoDB successfully');

    } catch (error) {
        console.error(error.message, error);
        throw error; // Re-throw the error to handle it in the calling function
        process.exit(1); // Exit the process if the connection fails
    }
}

export default connectToDatabase;