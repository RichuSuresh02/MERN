import mongoose from "mongoose"

const connectDB = async () => {
    try {
await mongoose.connect("mongodb+srv:richusuresh02:Mongo@rockyou@cluster0.24kbmbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    } catch (error) {

    }
}