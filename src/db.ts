import mongoose from "mongoose";
const connection = async (url: string): Promise<void> => {
    try {
        await mongoose.connect(url);
        console.log("Mongoose is connected");
    } catch (error: any) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
};

export default connection;
