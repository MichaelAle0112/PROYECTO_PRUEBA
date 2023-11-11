require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//conexion a la bd

(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI_DEV);
        console.log('Te has conectado a MongoDB');
    }catch(error){
        console.log('error');
    }
})();

//crear las rutas de frontend para localhost:3000

app.use('/',express.static(path.resolve('views','home')));
app.use('/imagenes',express.static(path.resolve('imagenes')));
app.use('/info',express.static(path.resolve('views','info')));
app.use('/mision',express.static(path.resolve('views','mision')));
app.use('/servicios',express.static(path.resolve('views','servicios')));
app.use('/vision',express.static(path.resolve('views','vision')));
app.use('/registro',express.static(path.resolve('views','registro')));
app.use('/solicitar',express.static(path.resolve('views','solicitar')));
app.use('/login',express.static(path.resolve('views','login')));
app.use('/spark',express.static(path.resolve('views','spark')));
app.use('/kia',express.static(path.resolve('views','kia')));
app.use('/hyundai',express.static(path.resolve('views','hyundai')));
app.use('/sprinter',express.static(path.resolve('views','sprinter')));
app.use('/spacefox',express.static(path.resolve('views','spacefox')));
app.use('/usuarios',express.static(path.resolve('views','usuarios')));


module.exports = app;