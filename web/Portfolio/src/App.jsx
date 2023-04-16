import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <div className='typing'>
          <p className='types typing1'>$ sudo apt install git</p>
          <p className='types typing2'>$ git config --global user.name VictorAlves</p>
          <p className='types typing3'>$ git config --global user.email victoralves741@gmail.com</p>
          <p className='types typing4'>$ git config --global core.editor nano</p>
          <p className='types typing5'>$ cd /home/portfolio</p>
          <p className='types typing6'>$ git init</p>
          <p className='types typing7'>$ git add .</p>
          <p className='types typing8'>$ git commit -m"Fist commit"<span>|</span></p> 
        </div>

        <img className='logo-pessoal' src="/eu.png" alt="" />
        <h1>Victor Alves da Costa</h1>
        <p>Desenvolvedor Full-stack Javascript e Python</p>
        <p>Graduando em Engenharia de Software</p>

        {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        
        <a href="https://www.linkedin.com/in/victor-alvc
" target='_blank'><img src="/linkedin.svg" alt="Icone do linkedin" className='logo' /></a>
        <a href="https://github.com/Victor-Alves1" target='_blank'><img src="/github.svg" alt="Icone do github" className='logo' /></a>
        <a href="https://medium.com/@victoralves741" target='_blank'><img src="/medium.svg" alt="Icone do medium" className='logo' /></a>
        <a href="#"><img src="/email.svg" alt="Icone do email" className='logo' /></a>
      </div>

      <div className="card">
        
        <div className='prestigio' onClick={() => setCount((count) => count + 1)}>
          <img className='palmas-prestigio palmas-1' src="/palmas.gif" alt="" />
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
