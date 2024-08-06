const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    dni: {
        type: String,
        trim: true,
        unique: true,
    },
    domicilio: {
        type: String,
        trim: true, 
    },
    telefono: {
        type: String,
        trim: true, 
    },
    fechaNacimiento: {
        type: String,
        trim: true, 
    },
    edad: {
        type: Number,
        trim: true, 
    },
    sexo: {
        type: String,
        trim: true, 
    },
    antecedentes: {
        type: Schema.Types.Boolean,
        ref: "Antecedentes",
        trim: true
    }
})

module.exports = mongoose.model('Paciente', PacienteSchema)