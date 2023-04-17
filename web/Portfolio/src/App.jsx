import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App centralizado">
      <div>

        <div className='pessoal'>
          <div className='informacoes-pessoal'>
            <h1>Desenvolvedor Full-stack</h1>
            <p>Olá, eu sou o Victor. Desenvolvedor Python(Django) e Javascript(React)<span className='typing'>|</span></p>
            <div className='stack surgir'>
              Stack:  <img src="/stack/icons8-html-5.svg" alt="icone html" />
                      <img src="/stack/icons8-css3.svg" alt="icone css" />
                      <img src="/stack/icons8-javascript.svg" alt="icone javascript" />
                      <img src="/stack/icons8-reagir.svg" alt="icone react" />
                      <img src="/stack/icons8-python.svg" alt="icone python" />
                      <img src="/stack/icons8-tailwindcss.svg" alt="icone tailwindcss" />
            </div>
            <div className='icones-pessoais surgir'>
              Contato:
              <a href="https://www.linkedin.com/in/victor-alvc
      " target='_blank'><img src="/contato/linkedin.svg" alt="Icone do linkedin" className='logo' /></a>
              <a href="https://github.com/Victor-Alves1" target='_blank'><img src="/contato/github.svg" alt="Icone do github" className='logo' /></a>
              <a href="https://medium.com/@victoralves741" target='_blank'><img src="/contato/medium.svg" alt="Icone do medium" className='logo' /></a>
              <a href="#"><img src="/contato/email.svg" alt="Icone do email" className='logo' /></a>
            </div>

          </div>
          <div className='foto-pessoal surgir'>
            <img className='logo-pessoal' src="/eu.jpg" alt="" /> 
          </div>
        </div>
        </div>
        
        
        

      <div className="card surgir">
        
        <div className='prestigio' onClick={() => setCount((count) => count + 1)}>
          <img className='palmas-prestigio palmas-1' src="/palmas.gif" alt="animação de palmas" />
          <button className='prestigio-1'>
            <img src="/prestigio.svg" alt="Icone de prestigio" />
            {count}
          </button>
          <button className='prestigio-2'>Clique aqui!</button>
          <img className='palmas-prestigio palmas-2' src="/palmas.gif" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
