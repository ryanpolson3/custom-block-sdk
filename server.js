const express = require('express');

// Init express
const app = express();

// Use static pages in the dist folder
app.use('/', express.static('dist'));

// Init port
const PORT = process.env.PORT || 3000;

// Listen on a port
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
