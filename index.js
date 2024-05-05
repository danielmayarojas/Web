const express = require('express');

const app = express();
const port = 3000;

// Configuración para servir archivos estáticos
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});