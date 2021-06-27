const express =require('express');

const app=express();

const alasql=require('alasql');

alasql("CREATE TABLE Cursos(id INT, nombre STRING, nota NUMBER)");

alasql("INSERT INTO Cursos VALUES(1, 'Dessarollo web',17)");
alasql("INSERT INTO Cursos VALUES(2, 'Basde de datos',16)");
alasql("INSERT INTO Cursos VALUES(3, 'Dessarollo movil',15)");

app.get("/",(req,res)=>{
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(alasql("SELECT * FROM Cursos WHERE nota > 15")));

});

app.listen(8080,()=>{
  console.log('Servidor Iniciado...');
});