// todos los requiere, constantes , modulos.
const path = require ('path');
const express = require('express');
const app = express();
const puerto = 3030;

// configuraciones
const publicPath = path.resolve ( __dirname, './public');
app.use(express.static(publicPath));
app.set('puerto',process.env.PORT || 3030);

//rutas
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get('/crearProducto',(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/crearProducto.html"));
});

//levantar nuestro server
app.listen (app.get('puerto'), ()=> console.log('servidor corriendo de manera satisfactoria ${app.get('puerto')}' ));