import { useParams, useNavigate } from 'react-router-dom';
import { AllJamoalar } from '../lib/Kommand';
import "../CSS/Detail.css"

const Detail = () => {
    const { id: jamoaId } = useParams();
    const navigate = useNavigate();

    const jamoa = AllJamoalar.find(product => product.id === parseInt(jamoaId));

    if (!jamoa) {
        return <h2>Mahsulot topilmadi yoki ID noto'g'ri</h2>;
    }

    const { id, name, achko, gollar, oyin, img, Tuzulishi, HammaSariq, HammaQizil, Players } = jamoa;





    return (
        <div className="detail-container">
            <button className='Detail-button' onClick={() => navigate("/")}><i class="fa-solid fa-arrow-left"></i>Ortga Qaytish</button>
            <div className="club_container">
                <img src={img} />
                <div className="club_container_bottom">
                    <h1> Oyin:{oyin}</h1>
                    <h1 className="detail-title"> Club:{name}</h1>
                    <p className="detail-description"> Achko: {achko}</p>
                    <p> Gollar: {gollar}</p>
                    <p className='Komanda_sariqlari' >Sariqlar : {HammaSariq} <img src="https://e1.365dm.com/score-centre/icons/yellow_card.svg" /> </p>
                    <p className='Komanda_qizilari'>Qizilar : {HammaQizil} <img src="https://3.bp.blogspot.com/_8Ezlqix616k/S_01vhQ1sRI/AAAAAAAAAbk/7Ddhk2ihJqM/s1600/red-card.jpg" /> </p>
                </div>
            </div>
            <div className="Grafik_korinish">
                <h1 className='Grafik_h1' >Jamoani Grafik Ko'rinishi</h1>
                <img src={Tuzulishi} />
            </div>
            <div className="Oyinchilar">
                <h1 className='Detail_h1'>O'yinchilar</h1>
                {Players.map((oyinchi, index) => (
                    <div className="Oyinchi" key={index}>
                        <div className="Oyinchi_head">
                            <h1> Ism: {oyinchi.name}</h1>
                            <img src={oyinchi.Sariq} />
                        </div>
                        <h2> Yosh: {oyinchi.Age}</h2>
                        <h3> {oyinchi.captain}</h3>
                        <h4> Pozitsiya: {oyinchi.Position}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Detail;