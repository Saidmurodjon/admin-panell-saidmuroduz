const express = require("express");
const app = express();
const appRouter = require("./Router");
const conexion = require("./database/db");
const { PORT } = require("./config");

conexion.once("open", () => console.log("Conexión exitosa a MongoDB"));
conexion.on("error", () => console.log("El error de conexión es: " + error));

app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(`¡Server UP! en http://localhost:${PORT}/admin`);
});
