import React from 'react'; //Esta librería nos permite escribir en sintaxis de HTML dentro de un archivo JavaScript 
import ReactDOM from 'react-dom'; //Esta libreria permite interactuar con el DOM
import './index.css';
import App from './App'; //Se importa la función de nombre App desde App.js
import reportWebVitals from './reportWebVitals';

//Esta es una librería ReactDOM que llama la función render, la cual renderiza nuestra función App de manera que se muestra como un tag de HTML 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); //Lo que document.getElementById('root') esta haciendo aqui es que esta buscando en el documento un elemento con el Id de root para reemplazarlo con todo el HTML de nuestra función App, este div con el Id de root se encuentra en index.html. Con esto podemos decir que en esta ubicación -del tag div con id root- inyectaremos nuestra aplicación de React (es decir, reemplazaremos lo que sea que hay en ese tag con nuestra aplicación React)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
