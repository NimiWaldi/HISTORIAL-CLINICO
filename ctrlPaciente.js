import Paciente from "../models/schemaPaciente.js";

const agregarPaciente = async (req, res) => {
  try {
    const datos = req.body;
    const nuevoPaciente = new Paciente(datos);
    await nuevoPaciente.save();
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el paciente", error: error.message });
  }
};

const consultarPacientes = async (req, res) => {
  try {
    const pacientesDB = await Paciente.find();
    res.json(pacientesDB);
  } catch (error) {
    res.status(500).json({ message: "Error al consultar los pacientes", error: error.message });
  }
};

const buscarPacientePorId = async (req, res) => {
  try {
    const { id } = req.params;
    const paciente = await Paciente.findById(id);

    if (!paciente) return res.status(404).json({ message: "Paciente no encontrado" });

    res.json(paciente);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar el paciente", error: error.message });
  }
};

const eliminarPaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Paciente.deleteOne({ _id: id });

    if (eliminado.deletedCount === 0)
      return res.status(404).json({ message: "Paciente no encontrado para eliminar" });

    res.json({ eliminado, mensaje: "Paciente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el paciente", error: error.message });
  }
};

const actualizarPaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = req.body;

    const actualizado = await Paciente.updateOne({ _id: id }, { $set: datos });

    if (actualizado.matchedCount === 0)
      return res.status(404).json({ message: "Paciente no encontrado para actualizar" });

    res.json({ actualizado, mensaje: "Paciente actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el paciente", error: error.message });
  }
};

export default {
  agregarPaciente,
  consultarPacientes,
  buscarPacientePorId,
  eliminarPaciente,
  actualizarPaciente,
};
