/* eslint-disable no-return-assign */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProfessional } from '../../services/professionals';
import { getSingleClientById } from '../../services/clients';
import { getJobById } from '../../services/jobs';
import { getChatById, updateChat } from '../../services/chats';
import socket from '../../utils/socket';

import './Chat.scss';

export default function Chat() {
  const { name, role } = useSelector((state) => state.user);
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState('');
  const [professional, setProfessional] = useState({});
  const [client, setClient] = useState({});
  const params = useParams();

  const messagesEndRef = useRef(null);

  useEffect(
    () => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    },
    [chat],
  );

  useEffect(async () => {
    const chats = await (await getChatById(params.id)).json();
    const job = await (await getJobById(params.id)).json();
    const professionals = await (await getSingleProfessional(job.professional));
    const clientResp = await (await getSingleClientById(job.client));
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });

    setChat(chats);
    setProfessional(professionals);
    setClient(clientResp);

    socket.on(`${params.id}:create`, (socketResponse) => {
      setChat(socketResponse);
    });
    return () => socket.off(`${params.id}:create`);
  }, []);

  const handleOnChange = (e) => {
    const newMsg = {
      text: e.target.value,
      user: name || 'user',
    };
    setMsg(newMsg);
  };

  const handleSendMsg = async (e) => {
    e.preventDefault();
    const newMsgs = [...chat.messages, msg];
    await updateChat(params.id, { messages: newMsgs });
    e.target.reset();
    setMsg({});
  };

  return (
    <div className="chat_sasasas ">
      <div className="chat__body">
        <div className="chat__header">
          { role === 'client'
            ? (
              <>
                <img className="photo" src={professional?.image?.profile} alt="constructor" />
                <p>{professional?.name}</p>
              </>
            )
            : (
              <>
                <img className="photo" src={client?.profilePicture} alt="constructor" />
                <p>{client?.name}</p>
              </>
            )}
        </div>
        <div id="chat__body__message">
          {chat?.messages?.map((message) => (
            <>
              <div className={(message?.user === name) ? 'chat__body__message__text__right' : 'chat__body__message__text__left'}>
                {message?.text}
              </div>
              <div className={(message?.user === name) ? 'chat__body__message__date__right' : 'chat__body__message__date__left'}>
                {message?.createdAt[11]}
                {message?.createdAt[12]}
                {message?.createdAt[13]}
                {message?.createdAt[14]}
                {message?.createdAt[15]}
              </div>
            </>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat__input--control">
          <form onSubmit={handleSendMsg}>
            <textarea type="text" className="chat__input" placeholder="Escribe un mensaje..." onChange={handleOnChange} />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
