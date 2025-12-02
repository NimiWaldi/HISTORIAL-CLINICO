/**
 * Middleware de validación que usa un esquema Joi
 * @param {Joi.ObjectSchema} schema - El esquema Joi a usar para la validación.
 */
const validate = (schema) => (req, res, next) => {

  const { error } = schema.validate(req.body, { 
    abortEarly: false,
    allowUnknown: true
  });

  if (error) {
    // Mapea los detalles del error para una respuesta más limpia
    const errorMessages = error.details.map(detail => detail.message.replace(/['"]+/g, ''));
    return res.status(400).json({ 
      message: "Error de validación de datos.", 
      errors: errorMessages 
    });
  }

  // Si no hay errores, pasa al siguiente middleware/controlador
  next();
};

export default validate;