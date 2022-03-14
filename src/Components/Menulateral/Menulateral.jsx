import {Link} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import { DarseAlta } from './vistaMenu/DarseAlta';
import { Editar } from "./vistaMenu/Editar";
import { Historial } from "./vistaMenu/Historial";
import { MisCalificaciones } from "./vistaMenu/MisCalificaciones";
import { MisChats } from "./vistaMenu/MisChats";
import { MisContratos } from "./vistaMenu/MisContratos";
import { MiFavoritos } from "./vistaMenu/MisFavoritos";
import { MisPagos } from "./vistaMenu/MisPagos";
import { MiVisibilidad } from "./vistaMenu/MiVisibilidad";


export const MenuLateral= ()=> {
  const vector = {'misContratos':'none','misCalificaciones':'none','misChats':'none',
  'editar':'none','miVisibilidad':'none','misFavoritos':'none','miPago':'none',
  'Historial':'none','darseAlta':'none'}
  const[state,setState]= useState({vector});
  function click(e){
    setState({...vector,[e.target.name]:true})
  }
  console.log("este es el state:",state)
  return (
    <>
    <ul>
          <li><Link to='' name="misContratos" onClick={click}>Mis contratos</Link></li>
          <li><Link to='' name="misCalificaciones" onClick={click}>Mis calificaciones</Link></li>
          <li><Link to='' name="misChats" onClick={click}>Mis chats</Link></li>
          <li><Link to='' name="editar" onClick={click}>Editar perfil</Link></li>
          <li><Link to='' name="miVisibilidad" onClick={click}>Mi visibilidad</Link></li>
          <li><Link to='' name="misFavoritos" onClick={click}>Mis favoritos</Link></li>
          <li><Link to='' name="miPago" onClick={click}>Mi informacion de pago</Link></li>
          <li><Link to='' name="Historial" onClick={click}>Historial de compras</Link></li>
          <li><Link to='' name="darseAlta" onClick={click}>Darse de alta en pagina</Link></li>
    </ul>
    <ul>
    <DarseAlta style={`display: ${state.darseAlta?'block':'none'}`; background-color:#5956E9;}/>
           
             <Editar/>
            <Historial/>
            <MisCalificaciones/>
            <MisChats/>
            <MisContratos/>
            <MiFavoritos/>
            <MisPagos/>
            <MiVisibilidad/>
    </ul>
    </>

    )}
