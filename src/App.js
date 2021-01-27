import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'; //Importamos componente CardList
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

//En versiones anteriores podríamos ver como se importan dos librerias: React y ReactDOM
//Los componentes pueden ser construidos como funciones o como clases. Por default nos aparece una función con mombre App que regresa un bloque de HTML. Para un mayor entendimiento sobre como funciona esto ver Index.js

//La razón por la que querríamos hacer uso de componentes por clases es porque nos da acceso a algo llamado state (estado). state es un tipo de objeto javascript con propiedades a las que podemos acceder en cualquier momento dentro de nuestra clase. La manera en la que hacemos esto es llamando el keyword constructor (A1)

//En orden para poder escribir una clase se debe importar Component de React (import React, { Component } from ‘react’). Con esto podemos dar apertura y forma a nuestra clase:

//Component es parte de la libreria de 'react' que arriba importamos, donde usamos la estructura { Component }, sin embargo si no lo importaramos de esa manera, aun asi podríamos usarlo cambiando la declaración en nuestra clase de Component por React.Component. Ej: class App extends React.Component 

class App extends Component {
  //(A2)
  constructor() { //Dentro de constructor queremos llamar super
    super(); //super llamará al método de constructor() en el componente de clase, lo que nos da acceso a this.state

    //(KK2) Para ello, agregamos un campo a nuestro state que representará lo que el valor almacenado será. Lo llamaremos searchField y con un valor inicial de string vacio.
    this.state = {
      monsters: [],
      searchField: ''
    }; //Esta propiedad this.state ahora existe dentro de nuestra clase App y ahora podemos configurarla a algun valor. Configuramos una propiedad en nuestro objeto state

    //La clase Component, que se extiende a la clase App, nos da el método llamado setState, y lo que este método nos permite hacer es modificar nuestro objeto state, en cada uno de nuestros elementos HTML. Ahora tenemos acceso a otro método llamado onClick, que toma una función que es llamada cada vez que en su elemento se hace clic. Dentro de esta función pasamos this.setState, y lo que setState tomará es un objeto {} con todas las propiedades que queremos cambiar en nuestro state (estado), así como los valor nuevo que deseamos insertar. 
  }
// fecth() es una función nativa de javascript que nos permite realizar una solicitud de extracción en la URL introducida, realizar una solicitud API a esa URL, y lo que fetch() nos regresará será una promesa 'promise'. Una promesa es comunmente definida como un proxy para un valor que eventualmente estará disponible. Una vez qe una promsea ha sido llamada, comenzará en un 'estado pendiente'. Esa promesa nos dará una respuesta 'reponse' del 'body' actual de nuestra respuesta. Como queremos este body en un formato que nuestro JavaScript entienda haremos uso de un método json() para obtener como respuesta un body en este formato. 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters:users}));
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value});
  }

  //response.json() nos regresa una promesa, ya que se espera a que cargue el body de la API, tomar en cuenta que cuando veamos que se hace uso del keyword 'then' en cualquier codigo JavaScript esta es una función asíncrona usando 'promise'. Tomamos los usuarios que recibimos de response.json y lo configuramos 'monsters' con ese arreglo

  //Una vez importado nuestro componente Cardlist podemos hacer uso de ello por medio de un tag, CardList, aqui, será cualquier parámetro (props, en su inicialización en su documento) que pasemos en CardList. Prop será un objeto de cualquer propiedad que se escriba o declare en el componente donde sea usado. (card-list.component.js == H2) Children será aquello que pasemos entre brackets del componente que es llamado (H3). Ahora en lugar de pasar un string en <CardList> pasaremos todos nuestros elementos 'monsters'. Recordemos que .map() generará la lista de <h1> de la misma manera, pero después los pondra como Children entre el div de card-list.component.js donde tenemos nuestro componente CardList. 
  
  // render() {
  //   return (
  //     <div className="App">
  //     <CardList name='Izcoatl'> 
  //       {this.state.monsters.map(monster => (
  //         <h1 key={monster.id}> {monster.name}</h1>
  //       ))}
  //     </CardList>
  //   </div>
  //   );

  //Por ahora App.js esta siendo responsable de iterar sobre la lista de 'monsters' y, despues con base a ello, crear los elementos. Sin embargo queremos darle esa responsabilidad a nuestro componente CardList, ya que debería ser responsable de enlistar las cartas. Pasaremos monsters como un 'prop' de nuestro componente App. Después moveremos nuestro codigo donde llamamos map() al componente CardList (G1)

  //Cuando usamos el elemento input debemos recordar que requiere un atributo 'type' que determinará el tipo de caja de busqueda que será (password, etc). Con el tipo 'search' podemos hacer uso de otro atributo 'placeholder' que nos permitirá poner un string en la caja aun cuando no hemos escrito nada. Ahora lo que tenemos que hacer es poder tomar control cada vez que el usuario escribe algo en la entrada, ya que queremos almacenar ese string en nuestro state, y al almacenarlo en nuestro state podemos usarlo para poder filtrar nuestros monstruos (KK1). Dentro de input podemos hacer uso de onChange, este es un método que 'dispara' con un evento sintético, que en esencia es solo un evento en nuestro navegador cada vez que el input es modificado (cuando se escribe o borra algo). Pasamos una función en onChange, donde, en este caso, e representa el evento sintético (en un aspecto mas general ejecutará onChange con cualquier función que pasemos). Si imprimimos en la consola nuestro evento sintético observaremos que es un objeto enorme con muchos campos, ya que es un evento nativo que el navegador usa para hacer todo tipo de cosas.

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}> 
          
        </CardList>
    </div>
    );
  }
} //Para renderizar nuestro string que hemos declarado como propiedad, dentro de nuestro HTML, tomamos la sintaxis de JSX para uso de javascript dentro de HTML, y escribiremos this.state.string

//Si queremos renderizar multiples propiedades que conforman un objeto en state podemos hacer uso del método de arreglo "map()". map nos regresará el valor que, de igual manera, nos regresará la función que pasemos dentro de este método, iterándo esta función sobre cada uno de los elementos en el arreglo. Con base en esto, map() toma una función donde el primer argumento será el elemento actual en el que esta función será llamada. Al hacer esto siempre debemos agregar una "llave" única a cada "child" (o hijo) que es regresado por medio de map(). Debemos proveer algo que sea completamente único a esta lista de elementos en nuestro objeto propiedad en state.  

//La razón por la que queremos una llave única es porque React necesita saber qué elemento necesita actualizar si unos de los elementos en el arreglo cambia

export default App;
