import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './Header'
import Habilidades from './Habilidades'
import Projetos from './Projetos'
import SobreMim from './SobreMim'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div >

      <App id='section1'/>
    </div>
    <div>
      <Habilidades id='section2'/>
    </div>
    <div >
      <Projetos id='section3'/>
    </div>
    <div>
      <SobreMim id='section4'/>
    </div>
    creditos: icones por <a target="_blank" href="https://icons8.com">Icons8</a> e <a href="https://phosphoricons.com/">PhosphorIcons</a>

  </React.StrictMode>,
)
