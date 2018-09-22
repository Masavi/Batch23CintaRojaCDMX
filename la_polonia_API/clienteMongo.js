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
const ObjectId = mongoose.Schema.ObjectId;

const alumnoSchema = Schema({
    alumno: ObjectId,
    nombres: String,
    apellidos: String,  
    edad: {type: Number},//Number,
    sexo: String,
    curso: {
      type: ObjectId,
      ref: 'Curso'
    }
});

const cursoSchema = Schema({
    curso: ObjectId,
    nombre: String,
    descripcion: String,
    precio: Number
});

const Alumno = mongoose.model('Alumno', alumnoSchema);
const Curso = mongoose.model('Curso', cursoSchema);

module.exports = {Alumno, Curso};