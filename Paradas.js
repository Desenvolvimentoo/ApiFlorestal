import mongoose from "mongoose";

const paradaSchema = new mongoose.Schema({
    tipoOperacao: {
        type: String,
        required: true
        },
    formaOperacao: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    floresta: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    frota: {
        type: String,
        required: true
    },
    operador: {
        type: String,
        required: true
    },
    turno: {
        type: String,
        required: true
    },
    hi: {
        type: Number,
        required: true
    },
    hf: {
        type: Number,
        required: true
    },
    motivo: {
        type: String,
        required: true
    },
    observacao: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Parada", paradaSchema)