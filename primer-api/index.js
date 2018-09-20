const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("La API Funciona!!!"));

app.post("/api/v1/mensajes/", (request, response) => {
    response.status(201).send({mensaje: "Haz hecho una petición POST"});
});

// Request Params
app.get("/api/v1/autores/:id/:numero/:saludo/", (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

// Request Query Params
app.get("/api/v1/refrigeradores", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

app.post("/api/v1/autores/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000...");
});
