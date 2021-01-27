import React from 'react';
import './search-box.component.css';

//Los componentes funcionales, a diferencia de los componentes de clase, no tienen acceso a State, ya que no tienen acceso a constructor() (el cual es un método de clase de Component -al que se extiende y que se importa de 'react-). De igual manera tampoco se tiene acceso de los métodos de ciclo de vida (lifecycle methods). No siempre es necesario disponer de métodos de ciclo de vida o de State ya que en ocasiones lo que querremos será renderizar solo HTML y eso es lo que un componente funcional hace. En pocas palabras un componente funcional es solo un componente al que se le pasan unos 'props' y regresa HTML.

//Como vimos con la de-estructuración, también podemos realizar este mismo proceso de-estructurando 'props' fuera del objeto 'props', ya que cuando pasamos (props) se pasan como un solo objeto grande, así que se pasemos individualmente cada 'prop'. handleChange será el nombre bajo el que pasaremos la función (que declaramos dentro de input y -que antes era el atributo onChange- en App.js) para cambiar nustro state de acuerdo a los eventos sintéticos detonados por onChange

export const SearchBox = ({placeholder, handleChange}) => (
  <input 
    className='search'
    type='search' 
    placeholder={placeholder} 
    onChange={handleChange}
    />
);