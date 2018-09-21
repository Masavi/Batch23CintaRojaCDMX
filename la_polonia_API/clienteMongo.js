const mongoose = require('mongoose');

const url = 'mongodb://masavi:123abc@ds163842.mlab.com:63842/polonia_api';

mongoose.connect(
  url,
  { useNewUrlParser: true },
  () => {
    console.log("¡Conexión exitosa con la base de datos!");
  }
);

const Schema = mongoose.Schema;
const ObjetId = mongoose.Schema.ObjectId;

const alumnoSchema = Schema({
    nombre: String,
    edad: Number,
    curso: []
});