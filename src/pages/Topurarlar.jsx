import React, { useState } from 'react';
import PlayerList from '../components/PlayerList';

function Topurarlar() {
  const [players, setPlayers] = useState([
    { id: 11, name: 'Shoxrux', age: 18, position: 'Forward', goals: 13 },
    { id: 1, name: 'Javoxir', age: 17, position: 'Forward', goals: 12 },
    { id: 3, name: 'Rasulbek', age: 19, position: 'Forward', goals: 11 },
    { id: 7, name: 'Azamat', age: 18, position: 'Forward', goals: 9 },
    { id: 5, name: 'Ismoil', age: 18, position: 'Midfielder', goals: 6 },
    { id: 9, name: 'Akobir', age: 16, position: 'Forward', goals: 6 },
    { id: 2, name: 'Oqilbek', age: 19, position: 'Forward', goals: 4 },
    { id: 10, name: 'Dovudbek', age: 18, position: 'Forward', goals: 4 },
    { id: 15, name: 'Nurmuhammad', age: 18, position: 'Forward', goals: 4 },
    { id: 4, name: 'Dostonbek', age: 22, position: 'Midfielder', goals: 4 },
    { id: 6, name: 'Bunyodbek', age: 22, position: 'Forward', goals: 4 },
    { id: 8, name: 'Husanboy', age: 17, position: 'Forward', goals: 2 },
    { id: 14, name: 'Ozodbek', age: 18, position: 'Defender', goals: 2 },
    { id: 13, name: 'Mirihtiyor', age: 16, position: 'Defender', goals: 2 },
    { id: 12, name: 'Mirshohid', age: 16, position: 'Forward', goals: 2 },
    { id: 16, name: 'Abdulaziz', age: 22, position: 'Midfielder', goals: 1 },
    { id: 16, name: 'Asatbek', age: 18, position: 'Midfielder', goals: 1 },
    { id: 16, name: 'Mirzobek', age: 19, position: 'Midfielder', goals: 1 },
    { id: 16, name: 'Hasanboy', age: 19, position: 'goalKeapper', goals: 1 },
  ]);

  return (
    <div className="TOPURARLAR">
      <h1 className='title'> To'p Urarlar Ro'yxati</h1>
      <p className='pp'>
        <PlayerList players={players} />
      </p>
    </div>
  );
}

export default Topurarlar;
