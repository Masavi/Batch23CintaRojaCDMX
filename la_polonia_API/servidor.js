const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// --------- CRUD Alumnos ---------
// CREATE  ->  Post One
app.post('/api/alumnos/', (request, response) => {
    let json = request.body;

    // -> Cosas mágicas y ancestrales...
    // jsonResultado -> res.send(jsonResultado);

    response
        .status(201)
        .send({
            "menssage": "Alumno creado exitosamente",
            "body": json
        });
});

// READ    ->  Get All
app.get('/api/alumnos/', (request, response) => {

    // Ir a la base de datos y pedir un json con todos los alumnos...
    // guardarlo en un objeto (jsonResultado)
    // -> res.send(jsonResult)

    response.status(200).send({
        "message": "Lista de alumnos obtenida exitosamente",
        "body": {"alumno":"prueba"}
    });
});


// READ    ->  Get One
app.get('/api/alumnos/:id/', (req, res)=>{
    const alumnoId = req.params.id;

    // Pedir a la base de datos el alumno con id = alumnoId
    // mandarle al cliente el alumno con el ID solicitado

    res.status(200).send({
        "message": "Alumno hallado exitosamente",
        "body": {"nombre": "Mauricio Saavedra"}
    });
});

// UPDATE  ->  Put One
app.put('/api/alumnos/:id/', (req, res)=>{
    const alumnoId = req.params.id;

    // Pediría a la base de datos que modifique al alumno con id = alumnoId
    // Mostraría al cliente los datos del alumno modificado

    res.status(200).send({
        "message": "Alumno modificado exitosamente",
        "body": {"nombre": "Alumno Modificado"}
    });
});

// DELLETE ->  Delete One
app.delete('/api/alumnos/:id/', (req, res)=>{
    const alumnoId = req.params.id;

    // Pediría a la base de datos que borre al alumno con id = alumnoId
    // Respondería al cliente si su petición se procesó correctamente...

    res.status(204).send({
        "message": "Alumno eliminado exitosamente",
        "body": {}
    });
});

// --------- CRUD Cursos ---------
// CREATE  ->  Post One
app.post('/api/cursos/', (request, response) => {
    let json = request.body;

    // -> Cosas mágicas y ancestrales...
    // jsonResultado -> res.send(jsonResultado);

    response
        .status(201)
        .send({
            "menssage": "Curso creado exitosamente",
            "body": json
        });
});

// READ    ->  Get All
app.get('/api/cursos/', (request, response) => {

    // Ir a la base de datos y pedir un json con todos los cursos...
    // guardarlo en un objeto (jsonResultado)
    // -> res.send(jsonResult)

    response.status(200).send({
        "message": "Lista de cursos obtenida exitosamente",
        "body": { "curso": "cinta roja" }
    });
});


// READ    ->  Get One
app.get('/api/cursos/:id/', (req, res) => {
    const cursoId = req.params.id;

    // Pedir a la base de datos el curso con id = cursoId
    // mandarle al cliente el curso con el ID solicitado

    res.status(200).send({
        "message": "Curso hallado exitosamente",
        "body": { "nombre": "cinta blanca" }
    });
});

// UPDATE  ->  Put One
app.put('/api/cursos/:id/', (req, res) => {
    const cursoId = req.params.id;

    // Pediría a la base de datos que modifique el curso con id = cursoId
    // Mostraría al cliente los datos del curso modificado

    res.status(200).send({
        "message": "Curso modificado exitosamente",
        "body": { "nombre": "cinta negra modificada lel" }
    });
});

// DELLETE ->  Delete One
app.delete('/api/cursos/:id/', (req, res) => {
    const cursoId = req.params.id;

    // Pediría a la base de datos que borre el curso con id = cursoId
    // Respondería al cliente si su petición se procesó correctamente...

    res.status(204).send({
        "message": "Curso eliminado exitosamente",
        "body": {}
    });
});

// use port 3000 unless there exists a preconfigured port
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});