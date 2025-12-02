import express from "express";
import pacienteCtrl from "../services/ctrlPaciente.js";
import validate from "../middleware/joiValidator.js";
import { crearPacienteSchema, actualizarPacienteSchema } from "../validations/Paciente.validations.js";

const router = express.Router();

router.get("/pacientes", pacienteCtrl.consultarPacientes);

router.post("/pacientes", validate(crearPacienteSchema), pacienteCtrl.agregarPaciente);

router.get("/pacientes/:id", pacienteCtrl.buscarPacientePorId);

router.delete("/pacientes/:id", pacienteCtrl.eliminarPaciente);

router.put("/pacientes/:id", validate(actualizarPacienteSchema), pacienteCtrl.actualizarPaciente);



export default router;
