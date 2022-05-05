/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Middle.scss';

export default function Middle({
  title, text, button, link,
}) {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation(link);
  };

  return (
    <div className="middle">
      <div className="messages">
        <label className="title__messages" htmlFor="name">{title}</label>
        <label className="text__messages" htmlFor="name">{text}</label>
        <button className="button__messages" type="button" onClick={handleClick}>{button}</button>
      </div>
    </div>
  );
}
