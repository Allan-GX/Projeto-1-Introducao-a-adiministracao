import { useState } from 'react'
import './App.css'
import CreditoComponent from './components/CreditoComponent'
import PerguntasComponent from './components/PerguntasComponent'
import Collection from './components/ButtonCollection';
import Pergunta from './components/PerguntaCompleta';
import Inicio from './components/TelaInicialComponent';
import Fim from './components/TelaFinalComponent';

function App() {
  const [progress,setProgress] = useState(0);
  console.log(progress);

  return (
    <>
      <header>
        <Inicio progress={progress} setProgress={setProgress}/>
      </header>
      <main>
        <Pergunta progress={progress} setProgress={setProgress}/>
        <CreditoComponent progress={1} setProgress={setProgress}/>
      </main>

      <section>
        <Fim progress={progress} setProgress={setProgress}/>
      </section>
      </>
  )
}

export default App
