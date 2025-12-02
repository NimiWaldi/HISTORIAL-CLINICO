import Joi from "joi";

export const crearRegistroSchema = Joi.object({
  pacienteId: Joi.string().required(),  
  motivoConsulta: Joi.string().min(3).max(500).required(),
  diagnostico: Joi.string().min(3).max(500).required(),
  tratamiento: Joi.string().max(1000).optional(),
  fechaConsulta: Joi.date().optional(),
  medicoEncargado: Joi.string().min(3).max(100).required(),
  notasAdicionales: Joi.string().max(1000).optional(),
});

export const actualizarRegistroSchema = Joi.object({
  pacienteId: Joi.string().optional(),
  motivoConsulta: Joi.string().min(3).max(500).optional(),
  diagnostico: Joi.string().min(3).max(500).optional(),
  tratamiento: Joi.string().max(1000).optional(),
  fechaConsulta: Joi.date().optional(),
  medicoEncargado: Joi.string().min(3).max(100).optional(),
  notasAdicionales: Joi.string().max(1000).optional(),
}).min(1).messages({
  "object.min": "Debe proporcionar al menos un campo para actualizar.",
});
