/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Middle.scss';
import { useDispatch } from 'react-redux';
import { deactivateMiddle } from '../../store/actions';

export default function Middle({
  title, text, button, link,
}) {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleClick = () => {
    dispatch(deactivateMiddle());
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
