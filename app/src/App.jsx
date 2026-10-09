import { useState } from 'react'
import './App.css'
import CreditoComponent from './components/CreditoComponent'
import PerguntasComponent from './components/PerguntasComponent'
import Collection from './components/ButtonCollection';
import Pergunta from './components/PerguntaCompleta';
import Inicio from './components/TelaInicialComponent';
import Fim from './components/TelaFinalComponent';
import Erro from './components/TelaDeErroComponent';
import Stars from './components/StarTracker';
import Music from './components/MusicComponent';

function App() {
  const [progress,setProgress] = useState(0);
  const [simple,setSimple] = useState(0);
  const [acerto,setAcerto] = useState(0);

  return (
    <>
      <header>
        <Inicio progress={progress} simple={simple} setSimple={setSimple} setProgress={setProgress}/>
      </header>
      <main>
        <Pergunta progress={progress} acerto={acerto} setAcerto={setAcerto}simple={simple} setProgress={setProgress}/>
        {progress != 13 && progress != 22 && progress != 67 ? <Stars acerto={acerto}/> : null}
        <CreditoComponent progress={progress} setAcerto={setAcerto} acerto={acerto} simple={simple} setProgress={setProgress}/>
      </main>

      <section>
        <Fim progress={progress} acerto={acerto} setAcerto={setAcerto} setSimple={setSimple} setProgress={setProgress}/>
        <Erro progress={progress} acerto={acerto} setAcerto={setAcerto} setProgress={setProgress}/>
        <Music></Music>
      </section>
      </>
  )
}

export default App
