import PerguntasComponent from './PerguntasComponent'
import Collection from './ButtonCollection';

const Pergunta = ({progress,acerto,simple,setAcerto,setProgress}) => {

    function secreto(){
        if (progress == 19){
            console.log("psst, é a variável progress");
        }
    }
    if (progress > 0 && progress < 22){
        secreto();
        return (
            <section className='quiz-conteiner'>
                <PerguntasComponent progress={progress} acerto={acerto} simple={simple} setAcerto={setAcerto} setProgress={setProgress}/>
                <Collection progress={progress} acerto={acerto} setAcerto={setAcerto} simple={simple} setProgress={setProgress}/>
            </section>
        );
    } else {
        return (
            <>
            </>
        );
    }
}

export default Pergunta;