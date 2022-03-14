import {Link} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';

export const Calificaciones= ()=> {
  const vector = {'HistoricoCalificaciones':'','PorCalificar':''}
  const[state,setState]= useState({vector});
  function click(e){
    setState({...vector,[e.target.name]:true})
  }

  return (
    <>
    <ul>
          <li><Link to='' name="HistoricoCalificaciones" onClick={click}>-- Mi historico de calificaciones</Link></li>
          <li><Link to='' name="PorCalificar" onClick={click}>-- Trabajos por calificar</Link></li>
    </ul>
    <ul>

    </ul>
    </>

    )}
