import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Table.css";

const Table = ({ data }) => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    setFixtures(data.response);
  }, [data.response]);

  return (
    <div className="bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-500 grid grid-cols-1 divide-y text-black">
      <h1 className=" table-item title text-center text-white py-4">Bo'lib O'tgan O'yinlar Ro'yxati</h1>
      {fixtures.map((fixture) => (
        <Link to={`/fixture/${fixture.fixture.id}`} key={fixture.fixture.id}>
          <div className="bg-white py-2 transform transition duration-300 hover:scale-105">
            <div align="center">
              <img src={fixture.league.logo} width={25} alt="logo" />
              {/* <h1 className="KUTILAYOTGAN_OYIN">{fixture.league.Bolishi}</h1> */}
              {fixture.league.name}
            </div>

            <div className="text-center">{fixture.fixture.status.long}</div>

            <div className="w-full flex p-1">
              <div className="w-[10%]" align="center">
                <img src={fixture.teams.home.logo} width={30} />
              </div>

              <div className="w-[32%] text-right">
                {fixture.teams.home.name}
              </div>

              <div className="w-[16%] text-center">
                {fixture.goals.home} : {fixture.goals.away}
              </div>

              <div className="w-[32%] text-left flex">
                {fixture.teams.away.name}
              </div>

              <div className="w-[10%]" align="center">
                <img src={fixture.teams.away.logo} width={30} />
              </div>
            </div>

            <div className="text-center text-green-600">
              {fixture.fixture.status.elapsed}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Table;
