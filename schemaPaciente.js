import mongoose from "mongoose";

const { Schema, model } = mongoose;

const pacienteSchema = new Schema(
  {
    nombres: {
      type: String,
      required: true,
      trim: true,
    },
    apellidos: {
      type: String,
      required: true,
      trim: true,
    },
    tipoDocumento: {
      type: String,
      enum: ["CC", "TI", "CE", "PASAPORTE"],
      required: true,
    },
    numeroDocumento: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    sexo: {
      type: String,
      enum: ["M", "F", "Otro"],
      required: true,
    },
    telefono: {
      type: String,
      trim: true,
    },
    direccion: {
      type: String,
      trim: true,
    },
    correo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "pacientes",
  }
);

const Paciente = model("Paciente", pacienteSchema);
export default Paciente;
