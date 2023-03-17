const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const path = require("path");
const mime = require('mime');

const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

/* Data Base Conection */
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@proyects.kxrihqg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log(e));

// escribimos la función que creará nuestra cabecera
const setHeadersOnStatic = (res, path, stat) => {
  const type = mime.getType(path);
  res.set('content-type', type);
}
// creamos el objeto con las opciones
const staticOptions = {
  setHeaders: setHeadersOnStatic
}

  /* Midlewares */ 
app.use(express.static(path.join(__dirname, "public"), staticOptions));
app.use(express.json());
app.use(cors()); // Aqui se pueden añadir todas las aplicaciones que tienen acceso al servidor, si no se añade nada por defecto deja entrar a todo el mundo.
app.use(express.urlencoded({ extended: true }));
app.use("/api/players", require("./routes/routesPlayer.js"));
app.use("/api/records", require("./routes/routesRecord.js"));

app.listen(port);