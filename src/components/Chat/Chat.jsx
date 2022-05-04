import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChatById, updateChat } from '../../services/chats';
import socket from '../../utils/socket';

import './Chat.scss';

export default function Chat() {
  const { name } = useSelector((state) => state.user);
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState('');
  const params = useParams();

  useEffect(async () => {
    const response = await getChatById(params.id);
    const data = await response.json();
    setChat(data);

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
    <div className="chat">
      <div className="chat__header">
        Texto
      </div>
      <div className="chat__body">
        <div className="chat__body__message">
          {chat.messages?.map((message) => (
            <>
              <div className="chat__body__message__text">
                {message?.text}
              </div>
              <div className="chat__body__message__date">
                {message?.date}
              </div>
              <div className="chat__body__message__user">
                {message?.user}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="chat__input--control">
        <form onSubmit={handleSendMsg}>
          <input type="text" className="chat__input" placeholder="Escribe un mensaje..." onChange={handleOnChange} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
