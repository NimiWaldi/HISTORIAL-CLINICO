import express from "express";
import doctorCtrl from "../services/ctrlDoctor.js";
import validate from "../middleware/joiValidator.js";
import { crearDoctorSchema, actualizarDoctorSchema } from "../validations/Doctor.validations.js";

const router = express.Router();

router.get("/doctores", doctorCtrl.consultarDoctores);

router.post("/doctores", validate(crearDoctorSchema), doctorCtrl.agregarDoctor);

router.get("/doctores/:id", doctorCtrl.buscarDoctorPorId);

router.delete("/doctores/:id", doctorCtrl.eliminarDoctor);

router.put("/doctores/:id", validate(actualizarDoctorSchema), doctorCtrl.actualizarDoctor);



export default router;
