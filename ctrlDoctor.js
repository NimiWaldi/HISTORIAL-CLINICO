import Doctor from "../models/schemaDoctor.js";

const agregarDoctor = async (req, res) => {
  try {const datos = req.body;
    const nuevoDoctor = new Doctor(datos);
    await nuevoDoctor.save();
    res.status(201).json(nuevoDoctor);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el doctor", error: error.message });
  }
};

const consultarDoctores = async (req, res) => {
  try {
    const doctoresDB = await Doctor.find();
    res.json(doctoresDB);
  } catch (error) {
    res.status(500).json({ message: "Error al consultar los doctores", error: error.message });
  }
};

const buscarDoctorPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);

    if (!doctor) return res.status(404).json({ message: "Doctor no encontrado" });

    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar el doctor", error: error.message });
  }
};

const eliminarDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Doctor.deleteOne({ _id: id });

    if (eliminado.deletedCount === 0)
      return res.status(404).json({ message: "Doctor no encontrado para eliminar" });

    res.json({ eliminado, mensaje: "Doctor eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el doctor", error: error.message });
  }
};

const actualizarDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = req.body;

    const actualizado = await Doctor.updateOne({ _id: id }, { $set: datos });

    if (actualizado.matchedCount === 0)
      return res.status(404).json({ message: "Doctor no encontrado para actualizar" });

    res.json({ actualizado, mensaje: "Doctor actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el doctor", error: error.message });
  }
};

export default {
  agregarDoctor,
  consultarDoctores,
  buscarDoctorPorId,
  eliminarDoctor,
  actualizarDoctor,
};
