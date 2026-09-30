import BotaoCorreto from "./BotaoCorreto";

const Collection = () => {
    return (
            <div className=".grid-alternativas">
                <BotaoCorreto progress={progress} id={1}/>
                <BotaoCorreto progress={progress} id={2}/>
                <BotaoCorreto progress={progress} id={3}/>
                <BotaoCorreto progress={progress} id={4}/>
            </div>
    );
}