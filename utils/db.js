import mongoose from "mongoose";

const db = {
    connect: async () => {
        const uri =
            process.env.MONGODBURI;
        try {
            const connection = await mongoose.connect(uri);
            console.log("Connected to Database");
        } catch (e) {
            console.log("Error connecting to Database");
        }
    },
    disconnect: async () => {
        try {
            await mongoose.disconnect();
            console.log("Disconnected from Database");
        } catch (e) {
            console.log("Error disconnecting from Database");
        }
    }
};

export default db;
