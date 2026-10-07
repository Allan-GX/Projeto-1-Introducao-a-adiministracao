import { useState } from "react";
import Sobre from "./SobreoquizComponent";
import Titulo from "../assets/Tituloquiz.png"

function Inicio({progress,setProgress}){
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
            <img src={Titulo} alt="TDquiz" className="imagem"/>
            <button className="hub-button" onClick={handleJogar}>Jogar</button>
            <button className="hub-button" onClick={handleClick}>Sobre</button>
            <Sobre vis={sobrevis}/>
        </div>);
    } else {
        return (<></>);
    }
}

export default Inicio;