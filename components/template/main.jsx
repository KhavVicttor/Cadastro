import React from 'react';
import './main.css';
import Header from './Header';
//Main será nosso executável
export default (
  props /*Componente pode retornar múltiplos
elementos. Os fragmentos permitem agrupar uma lista
de filhos sem adicionar nós extras ao DOM. Para usarmos o header
*/
) => (
  <React.Fragment>
    <Header {...props} />
    <main className="content">
      <div className = "p-33 mt-3">
        {props.children}
      </div>
    </main>
  </React.Fragment>
);
