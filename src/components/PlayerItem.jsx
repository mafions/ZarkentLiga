import React from 'react';

function PlayerItem({ player , selected , onClick }) {
  const { name, age, position , goals } = player;

  return (
    <li className={`player-item ${selected ? 'selected' : ''}`} onClick={onClick}>
    <div className="player-info">
    <h2 className="player-title">{name}</h2>
      <p>Age: {age}</p>
      <p>Position: {position}</p>
      <h3> Goals:{goals}</h3>
    </div>
  </li>
  );
}

export default PlayerItem;  

