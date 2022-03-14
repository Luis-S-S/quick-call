import {Link} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import { Historico } from './Historico';
import { Proceso } from './Proceso';

export const Contratos = ()=> {
  const vector = {'Historico':'','Proceso':''}
  const[state,setState]= useState({vector});
  function click(e){
    setState({...vector,[e.target.name]:true})
  }

  return (
    <>
    <ul>
          <li><Link to='' name="Historico" onClick={click}>-- Mis Historico</Link></li>
          <li><Link to='' name="Proceso" onClick={click}>-- Proceso</Link></li>
    </ul>
    <ul>
          {state.Historico ? (<Historico/>):<></>}
          {state.Proceso ?(<Proceso/>):<></>}
    </ul>
    </>

    )}
