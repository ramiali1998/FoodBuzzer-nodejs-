const express = require('express');
const app = express();
const port = 3000;
const notFound = require("./middlewares/notFound.middleware");
const v1 = require('./Routes/v1');

//middlewares
app.use(express.json());



//routes
app.use('/v1', v1);
app.use(notFound);

app.listen(port, () => console.log(`Running at http://localhost:${port}`));