import Joi from "joi";

export const crearDoctorSchema = Joi.object({
  nombres: Joi.string().min(2).max(100).required(),
  apellidos: Joi.string().min(2).max(100).required(),
  tipoDocumento: Joi.string().valid("CC", "TI", "CE", "PASAPORTE").required(),
  numeroDocumento: Joi.string().min(5).max(20).required(),
  fechaNacimiento: Joi.date().required(),
  sexo: Joi.string().valid("M", "F", "Otro").required(),
  telefono: Joi.string().optional(),
  direccion: Joi.string().optional(),
  correo: Joi.string().email().optional(),
  especialidad: Joi.string().min(2).max(100).required(),
});

export const actualizarDoctorSchema = Joi.object({
  nombres: Joi.string().min(2).max(100).optional(),
  apellidos: Joi.string().min(2).max(100).optional(),
  tipoDocumento: Joi.string().valid("CC", "TI", "CE", "PASAPORTE").optional(),
  numeroDocumento: Joi.string().min(5).max(20).optional(),
  fechaNacimiento: Joi.date().optional(),
  sexo: Joi.string().valid("M", "F", "Otro").optional(),
  telefono: Joi.string().optional(),
  direccion: Joi.string().optional(),
  correo: Joi.string().email().optional(),
  especialidad: Joi.string().min(2).max(100).optional(),
}).min(1).messages({
  "object.min": "Debe proporcionar al menos un campo para actualizar.",
});
