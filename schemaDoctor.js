import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema, model } = mongoose;

const doctorSchema = new Schema(
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
      required: true,
      unique: true,
      trim: true,
    },
    especialidad: {
      type: String,
      required: true,
      trim: true,
    },
    usuario: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    clave: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "doctores",
  }
);

// Método para hashear la clave antes de guardar
doctorSchema.pre("save", async function (next) {
  if (!this.isModified("clave")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.clave = await bcrypt.hash(this.clave, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar la clave
doctorSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.clave);
};

const Doctor = model("Doctor", doctorSchema);
export default Doctor;
