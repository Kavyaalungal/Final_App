import mongoose from "mongoose";

const schema = new mongoose.Schema({
    image: {
        type: String,
        required: false,
        unique: false
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: false,
        unique: false
    },
    type: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
  
   
});

export default mongoose.model.Users || mongoose.model("User", schema);