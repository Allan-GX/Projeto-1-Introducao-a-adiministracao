import PerguntasComponent from './PerguntasComponent'
import Collection from './ButtonCollection';

const Pergunta = ({progress,acerto,simple,setAcerto,setProgress}) => {

    if (progress > 0 && progress < 3){
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