import { useState, useRef, useEffect } from "react";
import Musica from "../assets/Musica_quiz.mp3"
import Icon from "../assets/icon_audio.png"

function Music(){
    const [isPlaying,setIsPlaying] = useState(false);
    const audio = useRef(null)

    useEffect(() => {
        audio.current = new Audio(Musica);
        audio.current.loop = true;
        audio.current.volume = 1.0;

        return () => {
            if(audio.current) {
                audio.current.pause();
                audio.current = null;
            }
        };
    },[]);

    const clickPlay = () => {
        
        if (!audio.current) return;

        if (isPlaying) {
            audio.current.pause();
            setIsPlaying(false);
        } else {
            audio.current.play().then(() => {
            setIsPlaying(true);
            }).catch((err) => {
            console.error("Erro ao reproduzir o áudio:", err);
            });
        }
    };

    return(
        <button className="music-button" onClick={clickPlay}>
        <img className="imagemMusica" src={Icon} alt="icone-audio" />
        {isPlaying ? "ON" : "OFF"}</button>
    )
}

export default Music