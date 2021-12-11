const express = require('express')

const app = express()

// GET - Buscar uma informação dentro do servidor
app.get("/courses", (request, response) => {
    return response.json([ "Curso 1", "Curso 2", "Curso 3"])
})

// POST - Inserir uma informação no servidor
app.post("/courses", (request, response) => {
    return response.json([ "Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

// PUT - Alterar uma informação no servidor
app.put("/courses/:id", (request, response) => {
    return response.json([ "Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

// PATCH - Alterar uma informação específica
app.patch("courses/:id", (request, response) => {
    return response.json([ "Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

// DELETE - Deletar uma informação no servidor
app.delete("courses/:id", (request, response) => {
    return response.json([ "Curso 6", "Curso 7", "Curso 4"])
})

app.listen(3333)