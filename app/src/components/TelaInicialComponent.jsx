import { useState } from "react";
import Sobre from "./SobreoquizComponent";
import Titulo from "../assets/Tituloquiz.png"
import SimpleToggle from "./SimpleMode";

function Inicio({progress,setProgress, simple, setSimple}){

    const [sobrevis,setSobrevis] = useState(0);

    function handleClick(){
        if (sobrevis == 0){
            setSobrevis(1);
        } else {
            setSobrevis(0);
        }
    }

    function handleJogar(){
        setProgress(progress + 1);
    }

    if (progress === 0){
        return (
            <div className="quiz-container">
                <img src={Titulo} alt="TDquiz" className="imagemTitulo"/>
                <button className="hub-button" onClick={handleJogar}>Jogar</button>
                <SimpleToggle simple={simple} setSimple={setSimple}/>
                <button className="hub-button" onClick={handleClick}>Sobre</button>
                <Sobre vis={sobrevis}/>
            </div>);
    } else {
        return (<></>);
    }
}

export default Inicio;