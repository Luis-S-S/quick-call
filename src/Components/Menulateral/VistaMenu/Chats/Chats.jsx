import {Link} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';


export const Chats= ()=> {
  const vector = {'Contratos':'','Calificaciones':'','Chats':''}
  const[state,setState]= useState({vector});
  function click(e){
    setState({...vector,[e.target.name]:true})
  }

  return (
    <>
    <ul>
          <li><Link to='' name="Contratos" onClick={click}>Mis contratos</Link></li>
          <li><Link to='' name="Calificaciones" onClick={click}>Mis calificaciones</Link></li>
          <li><Link to='' name="Chats" onClick={click}>Mis chats</Link></li>
    </ul>
    <ul>

    </ul>
    </>

    )}
