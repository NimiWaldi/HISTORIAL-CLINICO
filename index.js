import express from "express";
import "dotenv/config";
import connectDB from "./src/db.js";

import pacienteRouter from "./src/routes/rutasPaciente.js";
import doctorRouter from "./src/routes/rutasDoctor.js";
import registroRouter from "./src/routes/rutasRegistro.js";

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.use("/api/v1", pacienteRouter);
app.use("/api/v1", doctorRouter);
app.use("/api/v1", registroRouter);


connectDB();

app.get("/", (req, res) => {
  res.send(`<h3>Servidor corriendo en el puerto ${port} OK</h3>`);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose por el puerto: ${port}`);
});
