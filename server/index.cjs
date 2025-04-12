// Importa express
const express = require('express');
const app = express();
const port = 3000;

// Datos simulados de pictogramas (esto lo harías con una base de datos real en el futuro)
const pictograms = [
    { word: "Gato", image: "https://i.pinimg.com/474x/71/3f/1d/713f1dd4444579a3ca89e7247b9a4d7a.jpg" },
    { word: "Perro", image: "https://thumbs.dreamstime.com/b/icono-de-l%C3%ADnea-color-sentada-perro-pictograma-para-p%C3%A1gina-web-promoci%C3%B3n-aplicaciones-m%C3%B3viles-p%C3%A1ginas-254868938.jpg" },
    { word: "Casa", image: "https://example.com/images/casa.png" }
];

// Configura el endpoint para obtener todos los pictogramas
app.get('/pictograms', (req, res) => {
    res.json(pictograms);
});

// Configura el endpoint para obtener un pictograma específico por palabra
app.get('/pictograms/:word', (req, res) => {
    const word = req.params.word;
    const pictogram = pictograms.find(p => p.word.toLowerCase() === word.toLowerCase());
    
    if (pictogram) {
        res.json(pictogram);
    } else {
        res.status(404).json({ message: "Pictograma no encontrado" });
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
