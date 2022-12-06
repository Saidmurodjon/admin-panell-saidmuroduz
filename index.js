const express = require("express");
const app = express();
const appRouter = require("./Router");
const conexion = require("./database/db");
const { PORT } = require("./config");
const cors = require('cors')
conexion.once("open", () => console.log("Conexión exitosa a MongoDB"));
conexion.on("error", () => console.log("El error de conexión es: " + error));

app.use(express.json());
app.use(cors()) 
app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(`¡Server UP! en http://localhost:${PORT}/admin`);
});
