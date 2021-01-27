import React from 'react';
import './card.styles.css';

//Exportamos nuestra const Card, que será un componente funcional (por función), que regresará un div. Como ya no tenemos al alcance el acceso a 'monster' (fuera del scope). Pasaremos 'monster' de la misma manera en que pasamos 'monsters' dentro de 'props' (en CardList) desde App.js. 

//Para la imagen utilizaremos una url donde se nos proprociona con distitnas imagenes variando el número solicitado en la URL, sin embargo en lugar de colocar un número específico usaremos una sintaxis ${props.monster.id} en la URL, ya que el id es un número único 
export const Card = props => (
  <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
    <h2> {props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);