import {Link} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import { DarseAlta } from './VistaMenu/DarseAlta/DarseAlta';
import { Editar } from "./VistaMenu/Editar/Editar";
import { Historial } from "./VistaMenu/Historial/Historial";
import { Calificaciones } from "./VistaMenu/Calificaciones/Calificaciones";
import { Chats } from "./VistaMenu/Chats/Chats";
import { Contratos } from "./VistaMenu/Contratos/Contratos";
import { Favoritos } from "./VistaMenu/Favoritos/Favoritos";
import { Pagos } from "./VistaMenu/Pagos/Pagos";
import { Visibilidad } from "./VistaMenu/Visibilidad/Visibilidad";


export const MenuLateral= ()=> {
  const vector = {'Contratos':'','Calificaciones':'','Chats':'','Editar':'',
  'Visibilidad':'','Favoritos':'','Pago':'','Historial':'','DarseAlta':''}
  const[state,setState]= useState({vector});
  function click(e){
    setState({...vector,[e.target.name]:true})
  }
  console.log("este es el state:",state)
  return (
    <div className='Menulateral'>
    <div>
          <li><Link to='' name="Contratos" onClick={click}>Mis contratos</Link></li>
          <li><Link to='' name="Calificaciones" onClick={click}>Mis calificaciones</Link></li>
          <li><Link to='' name="Chats" onClick={click}>Mis chats</Link></li>
          <li><Link to='' name="Editar" onClick={click}>Editar perfil</Link></li>
          <li><Link to='' name="Visibilidad" onClick={click}>Mi visibilidad</Link></li>
          <li><Link to='' name="Favoritos" onClick={click}>Mis favoritos</Link></li>
          <li><Link to='' name="Pago" onClick={click}>Mi informacion de pago</Link></li>
          <li><Link to='' name="Historial" onClick={click}>Historial de compras</Link></li>
          <li><Link to='' name="DarseAlta" onClick={click}>Darse de alta en pagina</Link></li>
    </div>
    <div>
          {state.Contratos ? (<Contratos/>):<></>}
          {state.Calificaciones ?(<Calificaciones/>):<></>}
          {state.Chats ?  (<Chats/>):<></>}
          {state.Editar ?  (<Editar/>):<></>}
          {state.Visibilidad ?  (<Visibilidad/>):<></>}
          {state.Favoritos ?  (<Favoritos/>):<></>}
          {state.Pago ?  (<Pagos/>):<></>}
          {state.Historial ? ( <Historial/>):<></>}
          {state.DarseAlta ? (<DarseAlta/>):<></>}
    </div>
    </div>

    )}
