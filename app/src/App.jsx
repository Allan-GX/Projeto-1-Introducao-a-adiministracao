import { useState } from 'react'
import './App.css'
import CreditoComponent from './components/CreditoComponent'
import PerguntasComponent from './components/PerguntasComponent'

function App() {
  const [progress,setProgress] = useState(1);

  return (
    <>
      <section>
        <section className='quiz-conteiner'>
          <PerguntasComponent progress={progress} setProgress={setProgress}/>
        </section>
        <PerguntasComponent></PerguntasComponent>
        <CreditoComponent></CreditoComponent>
      </section>

      <section>
      </section>
      </>
  )
}

export default App
