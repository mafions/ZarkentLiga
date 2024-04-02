import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JamoalDetails from "./JamoalDetails"; // JamoalDetails komponentini import qilib olamiz

const Jamoalar = () => {
    const [jamoalar, setJamoalar] = useState([
        {
            id: 4,
            name: "2005(1)",
            Orin: 1,
            img: "https://ir.ozone.ru/s3/multimedia-9/6623358309.jpg",
            oyin: "2",
            achko: "6",
            gollar: "11"
        },
        {
            id: 2,
            name: "2007(1)",
            Orin: 1,
            img: "https://avatars.mds.yandex.net/i?id=b78c3c2149b01d357fe7f836840996a1a523fd5d-4825158-images-thumbs&n=13",
            oyin: "2",
            achko: "3",
            gollar: "10"
        },
        {
            id: 6,
            name: "2006(2)",
            Orin: 3,
            img: "https://avatars.mds.yandex.net/i?id=9714adecfb06c39800522a12b51b6dd827446861-12542244-images-thumbs&n=13",
            oyin: "2",
            achko: "3",
            gollar: "9"
        },
        {
            id: 3,
            name: "2006(1)",
            Orin: 4,
            img: "http://s3-eu-west-1.amazonaws.com/product-img/75319_maxi_0.jpg",
            oyin: "2",
            achko: "3",
            gollar: "9"
        },
        {
            id: 5,
            name: "2000(1)",
            Orin: 2,
            img: "https://cdn.shopify.com/s/files/1/0518/3432/3098/products/Milanlogomockupfuljpeg.jpg?v=1659529798",
            oyin: "2",
            achko: "3",
            gollar: "8"
        },
        {
            id: 1,
            name: "2008(1)",
            Orin: 5,
            img: "https://i.pinimg.com/originals/a8/1a/72/a81a7215b02f6a9a6b5b1b28d2f2882f.png",
            oyin: "2",
            achko: "0",
            gollar: "6"
        },
    ]);
    
    return (
        <div>
            <section className='JAM_SECTION '>
                <div className="jadval">
                    <p>#</p>
                    <h3>TEAM</h3>
                    <p>O'YN</p>
                    <p>ACHKO</p>
                    <p>GOL</p>
                </div>
                {jamoalar.map((jamoal, index) => (
                        <div className='JAMOLAR'>
                            <div className="JAMOA_HEAD">
                                <img className='JAM_IMAGE' src={jamoal.img} alt={jamoal.name} />
                                <p>{jamoal.Orin}</p>
                            </div>
                            <li>{jamoal.name}</li>
                            <li>{jamoal.oyin}</li>
                            <li>{jamoal.achko}</li>
                            <li>{jamoal.gollar}</li>
                        </div>
                ))}
            </section>
        </div>
    );
};

export default Jamoalar;






// <section className='JAM_SECTION'>
//        <div className="jadval">
//                  <p>#</p>
//                  <h3>TEAM</h3>
//                  <p>O'YN</p>
//                  <p>ACHKO</p>
//                  <p>GOL</p>
//              </div>
//              {jamoalar.map((jamoal, index) => (
//                 <div className='JAMOLAR' key={index}>
//                     <div className="JAMOA_HEAD">
//                         <img className='JAM_IMAGE' src={jamoal.img} alt={jamoal.name} />
//                         <p>{jamoal.Orin}</p>
//                     </div>
//                     <ul>
//                         <li>{jamoal.name}</li>
//                         <li>{jamoal.oyin}</li>
//                         <li>{jamoal.achko}</li>
//                         <li>{jamoal.gollar}</li>
//                     </ul>
//                 </div>
//             ))}
//         </section>
// 
// import React, { useState } from "react";

// const Orinlar = () => {
//     const [jamoalar, setJamoalar] = useState([
//         {
//             id: 1,
//             name: "2008",
//             Orin: 4,
//             img: "https://i.pinimg.com/originals/a8/1a/72/a81a7215b02f6a9a6b5b1b28d2f2882f.png",
//             oyin: "0",
//             achko: "0",
//             gollar: "0"
//         },
//         {
//             id: 2,
//             name: "2007",
//             Orin: 3,
//             img: "https://avatars.mds.yandex.net/i?id=b78c3c2149b01d357fe7f836840996a1a523fd5d-4825158-images-thumbs&n=13",
//             oyin: "0",
//             achko: "0",
//             gollar: "0"
//         },
//         {
//             id: 3,
//             name: "2006",
//             Orin: 2,
//             img: "https://i.pinimg.com/originals/7e/f9/d6/7ef9d6cf14501d1dd5c38b1413c979e0.png",
//             oyin: "0",
//             achko: "0",
//             gollar: "0"
//         },
//         {
//             id: 4,
//             name: "2005",
//             Orin: 4,
//             img: "https://ir.ozone.ru/s3/multimedia-9/6623358309.jpg",
//             oyin: "0",
//             achko: "0",
//             gollar: "0"
//         },
//         {
//             id: 5,
//             name: "2002",
//             Orin: 1,
//             img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_München_%282002–2017%29.svg/1200px-Logo_FC_Bayern_München_%282002–2017%29.svg.png",
//             oyin: "0",
//             achko: "0",
//             gollar: "0"
//         }
//     ]);

//     return (
//        
//     );
// };

// export default Orinlar;
