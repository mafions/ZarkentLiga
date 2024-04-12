import React from 'react';

const JamoalDetails = ({ jamoalar, id }) => {
  // Berilgan id ga mos keluvchi jamoal ma'lumotini topish
  const jamoal = jamoalar.find(item => item.id === id);

  if (!jamoal) {
    return <div>Jamoal topilmadi</div>;
  }

  return (
    <div>
      <h2>{jamoal.name}</h2>
      <p>O'YN: {jamoal.oyin}</p>
      <p>ACHKO: {jamoal.achko}</p>
      <p>GOL: {jamoal.gollar}</p>
      <h3>Players</h3>
      <ul>
        {jamoal.Players.map(player => (
          <li key={player.name}>
            <p>Name: {player.name}</p>
            <p>Age: {player.Age}</p>
            <p>Position: {player.Position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JamoalDetails;
