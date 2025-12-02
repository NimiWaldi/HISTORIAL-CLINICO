import express from "express";
import registroCtrl from "../services/ctrlRegistro.js"; 
import validate from "../middleware/joiValidator.js";
import {
  crearRegistroSchema,
  actualizarRegistroSchema
} from "../validations/registroValidations.js";

const router = express.Router();

// Obtener todos los registros médicos
router.get("/registros", registroCtrl.consultarRegistros);

// Crear un nuevo registro médico
router.post(
  "/registros",
  validate(crearRegistroSchema),
  registroCtrl.agregarRegistro
);

// Buscar un registro específico por ID
router.get("/registros/:id", registroCtrl.buscarRegistroPorId);

// Eliminar un registro
router.delete("/registros/:id", registroCtrl.eliminarRegistro);

// Actualizar un registro
router.put(
  "/registros/:id",
  validate(actualizarRegistroSchema),
  registroCtrl.actualizarRegistro
);

export default router;
