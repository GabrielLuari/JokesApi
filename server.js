const express = require('express');
const cors = require('cors')  
const app = express();
app.use(cors()) 
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
const port = 8000;
const dotenv = require('dotenv');
const routes = require('./person.routes.js')
routes(app); 
require('./config/mongoose.config'); 

app.listen(port, () => console.log(`Listening on port: ${port}`) );
