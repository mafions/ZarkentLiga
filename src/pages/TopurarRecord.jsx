import React, { useState } from 'react';
import PlayerList from '../components/PlayerList';

function TopurarRecord() {
  const [players, setPlayers] = useState([
    { id: 11, name: 'Shoxrux', age: 18, position: 'Forward', goals: 34 , reputation: "" },
    { id: 3, name: 'Rasulbek', age: 19, position: 'Forward', goals: 25 ,  reputation: ""  },
    { id: 1, name: 'Javoxir', age: 17, position: 'Forward', goals: 21 , reputation: ""  },
    { id: 7, name: 'Azamat', age: 18, position: 'Forward', goals: 20 ,  reputation: ""  },
    { id: 5, name: 'Ismoil', age: 18, position: 'Midfielder', goals: 18 , reputation: ""  },
    { id: 2, name: 'Oqilbek', age: 19, position: 'Forward', goals: 16 ,  reputation: "" },
    { id: 9, name: 'Akobir', age: 16, position: 'Forward', goals: 9 ,  reputation: ""  },
    { id: 15, name: 'Nurmuhammad', age: 18, position: 'Forward', goals: 7 , reputation: ""   },
    { id: 10, name: 'Dovudbek', age: 18, position: 'Forward', goals: 7 , reputation: ""  },
    { id: 26, name: 'Mirsaid', age: 16, position: 'Forward', goals: 7 ,  reputation: "" },
    { id: 29, name: 'Muzaffer', age: 16, position: 'Defender', goals: 7 ,  reputation: "" },
    { id: 14, name: 'Ozodbek', age: 18, position: 'Defender', goals: 6 ,  reputation: ""  },
    { id: 6, name: 'Bunyodbek', age: 22, position: 'Forward', goals: 6 ,  reputation: "" },
    { id: 9, name: 'Akmal', age: 16, position: 'Defender', goals: 5  ,  reputation: "" },
    { id: 23, name: 'Sharofiddin', age: 22, position: 'Forward', goals: 4 , reputation: ""   },
    { id: 4, name: 'Dostonbek', age: 22, position: 'Midfielder', goals: 4 , reputation: ""  },
    { id: 12, name: 'Mirshohid', age: 16, position: 'Forward', goals: 4 , reputation: ""   },
    { id: 8, name: 'Husanboy', age: 17, position: 'Forward', goals: 3 , reputation: ""  },
    { id: 22, name: 'Nodirbek', age: 18, position: 'Defender', goals: 2 , reputation: ""  },
    { id: 25, name: 'Shoxjaxon', age: 16, position: 'Goalkeapper', goals: 2 , reputation: ""  },
    { id: 28, name: 'Mirzadavlat', age: 16, position: 'Defender', goals: 2 , reputation: ""  },
    { id: 13, name: 'Mirihtiyor', age: 16, position: 'Defender', goals: 2 , reputation: ""  },
    { id: 16, name: 'Asatbek', age: 18, position: 'Midfielder', goals: 2  , reputation: "" },
    { id: 17, name: 'Beksulton', age: 16, position: 'Midfielder', goals: 2  , reputation: ""  },
    { id: 18, name: 'Abdulaziz', age: 22, position: 'Midfielder', goals: 2 , reputation: ""  },
    { id: 19, name: 'Mirzobek', age: 19, position: 'Midfielder', goals: 1 , reputation: ""  },
    { id: 20, name: 'Hasanboy', age: 19, position: 'goalKeapper', goals: 1 , reputation: ""  },
    { id: 21, name: 'Shaxriyor', age: 17, position: 'Midfielder', goals: 1 , reputation: ""  },
    { id: 23, name: 'Mirziyod', age: 22, position: 'Defender', goals: 1 , reputation: ""  },
    { id: 24, name: 'Davron', age: 16, position: 'Forward', goals: 1 , reputation: ""  },
    { id: 26, name: 'Birodar', age: 16, position: 'Defender', goals: 1 , reputation: ""  },
    { id: 27, name: 'Muhammadqodir', age: 22, position: 'Defender', goals: 1 , reputation: ""  },
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

export default TopurarRecord;
