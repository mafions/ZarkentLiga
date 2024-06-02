import React, { useState } from 'react';
import PlayerList from '../components/PlayerList';

function Topurarlar() {
    const [players, setPlayers] = useState([
        { id: 8, name: 'Abrorbek', age: "?", position: 'Forward', goals: 8, reputation: "" },
        { id: 7, name: 'Diyorbek', age: 20, position: 'Forward', goals: 7, reputation: "" },
        { id: 1, name: 'Shoxrux (2006)', age: 18, position: 'Forward', goals: 6, reputation: "" },
        { id: 9, name: 'Xayotbek', age: 20, position: 'Forward', goals: 6, reputation: "" },
        { id: 7, name: 'Abu', age: 20, position: 'Defender', goals: 5, reputation: "" },
        { id: 3, name: 'Ismoil (2006) ', age: 18, position: 'Midfielder', goals: 3, reputation: "" },
        { id: 2, name: 'Rasulbek', age: 19, position: 'Forward', goals: 3, reputation: "" },
        { id: 10, name: 'Shoxrux (1996)', age: "?", position: 'Forward', goals: 2, reputation: "" },
        { id: 4, name: 'Javoxir', age: 17, position: 'Forward', goals: 2, reputation: "" },
        { id: 5, name: 'Azamat', age: 18, position: 'Forward', goals: 2, reputation: "" },
        { id: 11, name: 'Bahromjon', age: "?", position: 'Forward', goals: 1, reputation: "" },
        { id: 12, name: 'Oqiljon', age: "?", position: 'Forward', goals: 1, reputation: "" },
        { id: 6, name: 'Akmal', age: 16, position: 'Forward', goals: 1, reputation: "" },
        { id: 7, name: 'Nodirbek', age: 18, position: 'Defender', goals: 1, reputation: "" },
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
