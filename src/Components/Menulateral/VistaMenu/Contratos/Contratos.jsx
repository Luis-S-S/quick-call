import {Link} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import { Historico } from './Historico';
import { Proceso } from './Proceso';
import '../VistaMenu.scss';

export const Contratos = ()=> {
  const vector = {'Historico':'','Proceso':''}
  const[state,setState]= useState({vector});
  function click(e){
    setState({...vector,[e.target.name]:true})
  }

  return (

    <div className='VistaMenu'>
    <div className='Cabezera'>
          <li><Link to='' name="Historico" onClick={click}>Mis Historico de contrato</Link></li>
          <li><Link to='' name="Proceso" onClick={click}>Contratos en Proceso</Link></li>
    </div>
    <div className='Cuerpo'>
          {state.Historico ? (<Historico/>):<></>}
          {state.Proceso ?(<Proceso/>):<></>}
    </div>
    </div>

    )}
