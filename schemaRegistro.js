import mongoose from "mongoose";

const { Schema, model } = mongoose;

const registroSchema = new Schema(
  {
    pacienteId: {
      type: Schema.Types.ObjectId,
      ref: "Paciente",
      required: true,
    },
    motivoConsulta: {
      type: String,
      required: true,
      trim: true,
    },
    diagnostico: {
      type: String,
      required: true,
      trim: true,
    },
    tratamiento: {
      type: String,
      trim: true,
    },
    fechaConsulta: {
      type: Date,
      required: true,
      default: Date.now,
    },
    medicoEncargado: {
      type: String,
      required: true,
      trim: true,
    },
    notasAdicionales: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "registros_medicos",
  }
);

const RegistroMedico = model("RegistroMedico", registroSchema);
export default RegistroMedico;
