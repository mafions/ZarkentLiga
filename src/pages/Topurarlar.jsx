import React, { useState } from 'react';
import PlayerList from '../components/PlayerList';

function Topurarlar() {
    const [players, setPlayers] = useState([
        { id: 4, name: 'Javoxir (2007)', age: 17, position: 'Forward', goals: 24, reputation: "" },
        { id: 8, name: 'Abrorbek (1995)', age: "?", position: 'Forward', goals: 23, reputation: "" },
        { id: 15, name: 'Joxongir (1994)', age: "?", position: 'Forward', goals: 22, reputation: "" },
        { id: 1, name: 'Shoxrux (2006)', age: 18, position: 'Forward', goals: 13, reputation: "" },
        { id: 2, name: 'Rasulbek', age: 19, position: 'Forward', goals: 13, reputation: "" },
        { id: 9, name: 'Xayotbek', age: 20, position: 'Forward', goals: 11, reputation: "" },
        { id: 4, name: 'Izzatbek (1996)', age: "?", position: 'Forward', goals: 10, reputation: "" },
        { id: 14, name: 'Mirzadavlat', age: 17, position: 'Midfielder', goals: 9, reputation: "" },
        { id: 3, name: 'Ismoil (2006) ', age: 18, position: 'Midfielder',  goals: 9, reputation: "" },
        { id: 12, name: 'Oqiljon', age: "?", position: 'Forward', goals: 7, reputation: "" },
        { id: 23, name: 'Nosirjonov O (2006)', age: "18", position: 'Forward', goals: 9, reputation: "" },
        { id: 7, name: 'Diyorbek', age: 20, position: 'Forward', goals: 7, reputation: "" },
        { id: 5, name: 'Azamat', age: 18, position: 'Forward', goals: 7, reputation: "" },
        { id: 7, name: 'Abu', age: 20, position: 'Defender', goals: 7, reputation: "" },
        { id: 16, name: 'Oqilbek (2005)', age: 19, position: 'Forward', goals: 6, reputation: "" },
        { id: 25, name: 'Orifbek (1996)', age: "?", position: 'Forward', goals: 6, reputation: "" },
        { id: 6, name: 'Asatbek (2005)', age: 19, position: 'Midfielder', goals: 5, reputation: "" },
        { id: 19, name: 'Akmalbek (1999)', age: "?", position: 'Forward', goals: 5, reputation: "" },
        { id: 29, name: 'Akobir (2008)', age: "?", position: 'Forward', goals: 4, reputation: "" },
        { id: 17, name: 'Dovudbek', age: "18", position: 'Forward', goals: 4, reputation: "" },
        { id: 28, name: 'Abdugoppor  (1995)', age: "?", position: 'Forward', goals: 3, reputation: "" },
        { id: 24, name: 'Tolibjon (1994)', age: "?", position: 'Forward', goals: 3, reputation: "" },
        { id: 10, name: 'Shoxrux (1995)', age: "?", position: 'Forward', goals: 3, reputation: "" },
        { id: 27, name: 'Bunyodjon (2004)', age: "?", position: 'Forward', goals: 2, reputation: "" },
        { id: 13, name: 'Akmal (2007)', age: 17, position: 'Forward', goals: 2, reputation: "" },
        { id: 20, name: 'Mardonbek (2003)', age: "?", position: 'Forward', goals: 2, reputation: "" },
        { id: 7, name: 'Nodirbek', age: 18, position: 'Defender', goals: 2, reputation: "" },
        { id: 31, name: 'Lazizbek (2008)', age: "16", position: 'defender', goals: 1, reputation: "" },
        { id: 30, name: 'Mirjaxon (2005)', age: "19", position: 'Goalkeapper', goals: 1, reputation: "" },
        { id: 17, name: 'Azizbek (1994)', age: "?", position: 'Forward', goals: 1, reputation: "" },
        { id: 26, name: ' Fayzullo (1994)', age: "?", position: 'Forward', goals: 1, reputation: "" },
        { id: 24, name: 'Nurmuhammad (2006)', age: "17", position: 'Forward', goals: 1, reputation: "" },
        { id: 22, name: 'Bohodir (1994)', age: "?", position: 'Forward', goals: 1, reputation: "" },
        { id: 19, name: 'Muhammadiyor(2003)', age: "?", position: 'Forward', goals: 1, reputation: "" },
        { id: 21, name: 'Asadbek (2003)', age: "?", position: 'Midfielder', goals: 1, reputation: "" },
        { id: 15, name: 'Mirziod (2007)', age: "16", position: 'Midfielder', goals: 1, reputation: "" },
        { id: 11, name: 'Bahromjon', age: "?", position: 'Forward', goals: 1, reputation: "" },
        { id: 14, name: 'Ulugbek (1995)', age: "?", position: 'Forward', goals: 1, reputation: "" },
        { id: 27, name: 'Nuriddin (1995)', age: "?", position: 'Forward', goals: 1, reputation: "" },

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
