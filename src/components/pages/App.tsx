import React from 'react';
import Formulario from '../formulario';
import Lista from '../lista';
import style from './style.module.scss'
import Cronometro from '../cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario></Formulario>
      <Lista></Lista>
      <Cronometro></Cronometro>
    </div>
  );
}

export default App;
