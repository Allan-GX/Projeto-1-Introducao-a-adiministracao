import BotaoCorreto from "./BotaoCorreto";

const Collection = ({progress,setProgress}) => {
    return (
            <div className=".grid-alternativas">
                <BotaoCorreto progress={progress} setProgress={setProgress} id={1}/>
                <BotaoCorreto progress={progress} setProgress={setProgress} id={2}/>
                <BotaoCorreto progress={progress} setProgress={setProgress} id={3}/>
                <BotaoCorreto progress={progress} setProgress={setProgress} id={4}/>
            </div>
    );
}