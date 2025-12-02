import RegistroMedico from "../models/schemaRegistro.js";

const agregarRegistro = async (req, res) => {
  try {
    const datos = req.body;
    const nuevoRegistro = new RegistroMedico(datos);
    await nuevoRegistro.save();
    res.status(201).json(nuevoRegistro);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el registro médico",
      error: error.message
    });
  }
};

const consultarRegistros = async (req, res) => {
  try {
    const registrosDB = await RegistroMedico.find().populate("pacienteId");
    res.json(registrosDB);
  } catch (error) {
    res.status(500).json({
      message: "Error al consultar los registros",
      error: error.message
    });
  }
};

const buscarRegistroPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await RegistroMedico.findById(id).populate("pacienteId");

    if (!registro)
      return res.status(404).json({ message: "Registro no encontrado" });

    res.json(registro);
  } catch (error) {
    res.status(500).json({
      message: "Error al buscar el registro",
      error: error.message
    });
  }
};

const eliminarRegistro = async (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = await RegistroMedico.deleteOne({ _id: id });

    if (eliminado.deletedCount === 0)
      return res.status(404).json({
        message: "Registro no encontrado para eliminar"
      });

    res.json({
      eliminado,
      mensaje: "Registro eliminado correctamente"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el registro",
      error: error.message
    });
  }
};

const actualizarRegistro = async (req, res) => {
  try {
    const { id } = req.params;
    const datos = req.body;

    const actualizado = await RegistroMedico.updateOne(
      { _id: id },
      { $set: datos }
    );

    if (actualizado.matchedCount === 0)
      return res.status(404).json({
        message: "Registro no encontrado para actualizar"
      });

    res.json({
      actualizado,
      mensaje: "Registro actualizado correctamente"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el registro",
      error: error.message
    });
  }
};

export default {
  agregarRegistro,
  consultarRegistros,
  buscarRegistroPorId,
  eliminarRegistro,
  actualizarRegistro
};
