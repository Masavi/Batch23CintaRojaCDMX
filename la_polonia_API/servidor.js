const express = require('express');
const bodyParser = require('body-parser');
const {Alumno, Curso} = require('./clienteMongo.js');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



// -------------- CRUD Alumnos --------------

// CREATE  ->  Post One
app.post('/api/alumnos/', (request, response) => {
    let jsonCliente = request.body;

    //const nuevoAlumno = Alumno(jsonCliente);
    const nuevoAlumno = Alumno(jsonCliente);

    nuevoAlumno
        .save((error, alumno)=>{
            response
                .status(201)
                .send({
                    "menssage": "Alumno creado exitosamente",
                    "body": alumno,
                    "error": error
                })
        })
});

// READ    ->  Get All
app.get('/api/alumnos/', (request, response) => {

    Alumno
    .find()
    .populate('cursos')
    .exec()
    .then( jsonResultado => {
        response
            .status(200)
            .send({
                "message": "Lista de alumnos obtenida exitosamente",
                "body": jsonResultado
        });
    })
    .catch( error => console.log(error));
        
});

// READ    ->  Get One
app.get('/api/alumnos/:id/', (req, res)=>{
    const alumnoId = req.params.id;

    Alumno
        .findById(alumnoId)
        .populate('cursos')
        .exec()
        .then( alumno => {
            res.status(200).send(alumno);
        })
        .catch( error => {
            res.status(404).send(error);
        })
});

// UPDATE  ->  Put One
app.put('/api/alumnos/:id/', (req, res)=>{
    const alumnoId = req.params.id;

    Alumno 
        .findByIdAndUpdate(
            alumnoId,
            {$set: req.body},
            {new: true}
        )
        .populate('cursos')
        .exec()
        .then( alumnoActualizado => {
            res.status(200).send(alumnoActualizado);
        })
        .catch( error => {
            res.status(400).send(`Error: ${error}`);
        });
});

// DELLETE ->  Delete One
app.delete('/api/alumnos/:id/', (req, res)=>{
    const alumnoId = req.params.id;

    Alumno
        .findByIdAndRemove(alumnoId)
        .exec()
        .then( resultado => {
            res.status(204).send({
                "message": "Alumno eliminado exitosamente",
                "body": resultado
            })
        })
        .catch( error => {
            res.status(404).send(error)
        })

});







// -------------- CRUD Cursos --------------

// CREATE  ->  Post One
app.post('/api/cursos/', (request, response) => {
    let json = request.body;

    const cursoNuevo = Curso(json);

    cursoNuevo
        .save( (error, curso) => {
            response
                .status(201)
                .send({
                    "menssage": "Curso creado exitosamente",
                    "body": curso
                });
        })
});

// READ    ->  Get All
app.get('/api/cursos/', (request, response) => {

    Curso
        .find()
        .exec()
        .then( cursos => {
            response.status(200).send({
                "message": "Lista de cursos obtenida exitosamente",
                "body": cursos
            });
        })
        .catch( error => {
            response.status(404).send(error);
        })
});


// READ    ->  Get One
app.get('/api/cursos/:id/', (req, res) => {
    const cursoId = req.params.id;

    Curso
        .findById(cursoId)
        .exec()
        .then( curso => {
            res
              .status(200)
              .send({
                message: "Curso hallado exitosamente",
                body: curso
              });
        })
        .catch( error => {
            res.status(404).send(error);
        })
});

// UPDATE  ->  Put One
app.put('/api/cursos/:id/', (req, res) => {
    const cursoId = req.params.id;

    Curso
        .findByIdAndUpdate(
            cursoId,
            { $set: req.body },
            { new: true }
        )
        .exec()
        .then(cursoActualizado => {
            res.status(200).send(cursoActualizado);
        })
        .catch(error => {
            res.status(400).send(`Error: ${error}`);
        });
});

// DELLETE ->  Delete One
app.delete('/api/cursos/:id/', (req, res) => {
    const cursoId = req.params.id;

    Curso
        .findByIdAndRemove(cursoId)
        .exec()
        .then(resultado => {
            res.status(204).send({
                "message": "Curso eliminado exitosamente",
                "body": resultado
            })
        })
        .catch(error => {
            res.status(404).send(error)
        })
});







// -------------- Listen & Port --------------



// use port 3000 unless there exists a preconfigured port
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});