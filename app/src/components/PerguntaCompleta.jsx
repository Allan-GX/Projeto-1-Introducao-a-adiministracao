import PerguntasComponent from './PerguntasComponent'
import Collection from './ButtonCollection';
const Pergunta = ({progress,setProgress}) => {
    if (progress > 0){
        return (
            <section className='quiz-conteiner'>
            <PerguntasComponent progress={progress} setProgress={setProgress}/>
            <Collection progress={progress} setProgress={setProgress}/>
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