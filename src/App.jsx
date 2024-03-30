import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { fetchFixtures } from "./lib/fetch-data";
import { data } from "./lib/dummy-data";
import Table from "./components/table";
import Fixture from "./components/fixture";
import Navbar from "./components/Navbar";
import Orinlar from "./pages/Orinlar";
import JamoalDetails from "./pages/JamoalDetails";
import Topurarlar from "./pages/Topurarlar";

function App() {
  const [fixtures, setFixtures] = useState(data);

  // Uncomment this part if you want it to fetch data from RAPIDAPI
  // const fetchInfo = async () => {
  //   const data = await fetchFixtures();
  //   setFixtures(data):
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  console.log(fixtures);

  const refresh = () => window.location.reload(true);

  return (
    <div className="w-full">
      <button
        onClick={refresh}
        className="btn btn-sm fixed bottom-3 right-2 z-40"
      >
      </button>

      {fixtures.length === 0 ? (
        <div className="h-screen bg-white w-full text-center p-10">
          <Box>
          </Box>
        </div>
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Orinlar />} />
            <Route path="/topurarlar" element={<Topurarlar />} />
            <Route path="/fixtures" element={<Table data={fixtures} />} />
            <Route path="/fixture/:matchID" element={<Fixture />} />
            <Route path="/fixture/:matchID" element={<Fixture data={fixtures} />} />
            <Route path="/jamoalar/:id" element={<JamoalDetails />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
