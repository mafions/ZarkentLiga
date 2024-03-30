import React from "react";
import { useParams } from "react-router-dom";

const JamoalDetails = ({ jamoalar }) => {
    const { id } = useParams(); // URL dan ID ni olish

    const selectedJamoal = jamoalar.find(jamoal => jamoal.id === Number(id)) || {};

    return (
        <div className="SelectedPlayerInfo">
            <p>Oyinchi: {selectedJamoal.name}</p>
            <p>O'ynagan oyinlar: {selectedJamoal.oyin}</p>
            <p>Urildigan gollar: {selectedJamoal.achko}</p>
            <p>Otkazib yuborilgan gollar: {selectedJamoal.gollar}</p>
        </div>
    );
};

export default JamoalDetails;
