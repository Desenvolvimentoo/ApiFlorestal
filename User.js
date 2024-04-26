import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
        },
    nome: {
        type: String,
        required: true
    },
    matricula: {
        type: Number,
        required: true
    },
    senha: {
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("User", userSchema)