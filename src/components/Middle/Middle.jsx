/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Middle.scss';
import { useDispatch } from 'react-redux';
import { deactivateMiddle } from '../../store/actions';

export default function Middle({
  title, text, button, link, back,
}) {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleClick = () => {
    dispatch(deactivateMiddle());
    navigation(link);
  };
  const handleClickBack = () => {
    dispatch(deactivateMiddle());
  };

  return (
    <div className="middle">
      <div className="messages">

        {!(title === undefined) ? (
          <>
            <label className="title__messages" htmlFor="name">{title}</label>
            <label className="text__messages" htmlFor="name" data-cy="middle-text">{text}</label>
            <div className="flex__button">
              {!(back === undefined) && (
              <button className="button__messages" type="button" onClick={handleClickBack}>Cancelar</button>)}
              <button className="button__messages" type="button" onClick={handleClick} data-cy="middle-button">{button}</button>
            </div>
          </>
        )
          : (<div className="loader" />)}
      </div>
    </div>
  );
}
