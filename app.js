// todos los requiere, constantes , modulos.
const path = require ('path');
const express = require('express');
const app = express();

// configuraciones
const publicPath = path.resolve ( __dirname, './public');
app.use(express.static(publicPath));
app.set('puerto',process.env.PORT || 3000);

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
const PORT= process.env.PORT || 3000

app.listen(PORT, function(){
    console.log("servidor escuchando en el puerto", PORT)
})