import React from 'react';
import PlayerItem from './PlayerItem.jsx';

function PlayerList({ players }) {
  return (
    <ul>
      {players.map(player => (
        <PlayerItem key={player.id} player={player} />
      ))}
    </ul>
  );
}

export default PlayerList;
