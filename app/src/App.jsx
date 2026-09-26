import { useState } from 'react'
import './App.css'
import CreditoComponent from './components/CreditoComponent'
import PerguntasComponent from './components/PerguntasComponent'

function App() {

  return (
    <>
      <section>
        <PerguntasComponent></PerguntasComponent>
        <CreditoComponent></CreditoComponent>
      </section>

      <section>
      </section>
      </>
  )
}

export default App
