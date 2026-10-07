import { useState } from "react";
import Sobre from "./SobreoquizComponent";

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
        <div>
            <h1>nome do quiz</h1>
            <button onClick={handleJogar}>jogar</button>
            <button onClick={handleClick}>sobre o quiz</button>
            <Sobre vis={sobrevis}/>
        </div>);
    } else {
        return (<></>);
    }
}

export default Inicio;