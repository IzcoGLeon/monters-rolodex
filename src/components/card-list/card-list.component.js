import React from 'react';
import { Card } from '../card/card.component'; //Importamos nuestro componente Card del que haremos uso dentro de este componente funcional CardList 
import './card-list.styles.css';

//Exportamos nuestro componente FUNCIONAL CardList, que por ahora solo contendrá un elemento div. Algo sobre los componentes es que toman algo llamado 'props'. 'Props' será el parámetro que obtendremos de nuestro componente funcional. 

//Prop será un objeto de cualquer propiedad que se escriba o declare en el componente donde sea usado
//Una de las características que existen en el objeto Props es algo llamado 'children'. Siempre estará ahí pero si no hay un 'children' tendrá un valor null (App.js == H1). (H4) Ahora si renderizamos, en su lugar, props.children, podremos ver como se pasa esta propiedad dentro del <h1> que declaramos en App.js. 

// export const CardList = props => { 
//   console.log(props);
//   return <div className='card-list'>{props.children}</div>;
// };

//(G2) Con esto ya no necesitamos children, en su lugar vamos a generar las cartas usando map(). Y no proviene de this.state sino de props, de ahí el cambio de this.state.monsters a props.monsters, ya que llamamos this.state.monsters en el componente CardList en uso en App.js como props. Sin embargo, de lo que Cardlist no se puede hacer responsable es de como se visualizará nuestro elemento del arreglo (entre <h1>). 

/* <div className='card-list'>
{props.monsters.map(monster => (
  <h1 key={monster.id}> {monster.name}</h1>
))}
</div> */

// Como queremos que nuestro componente CardList no tenga que crear los elementos de imagen o de la carta, crearemos otro componente Card, CardList solo debería pensar que agregar, en que renderizar, no es como crearlo. 

//Debemos pasar 'monster' dentro del componente Card, después del componente Card (en su archvivo js) lo recibe ('monster') a través de 'props' y muestra el nombre.

export const CardList = props => ( 
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster}/>
    ))}
  </div>
);