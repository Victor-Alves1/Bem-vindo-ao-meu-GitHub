import './Projetos.css'

function Projetos(){
    return (
    <div className='centralizado'>
        <h1>Projetos</h1>
        <div className='projetos-flexgrid'>
            <div className='container-projetos'>
                <h2 className='grid-c1 grid-l1'>Clonando a interface do jogo League of Legends(LOL)</h2>
                <video className='grid-c1 grid-l2'  height="380" controls muted loop>
                    <source src="/lol.mp4" type="video/mp4"/>   
                </video>
                <p className='grid-c1 grid-l3'>Projeto é 100% autoral, decidi criar algo que tivesse conexão comigo. Escolhi o jogo League of Legends por ser um game que joguei durante anos.
                <br />
                O projeto foi feito consumindo a API oficial do jogo.<a href="https://github.com/Victor-Alves1/League-of-Legends-Clone">Código no Github.</a> <a href="https://league-of-legends-clone.vercel.app/home">Clique aqui para acessar o projeto.</a></p>
                <p className='grid-c1 grid-l4'>Tecnologias utilizadas:<img src="/stack/icons8-html-5.svg" alt="icone html" /> HTML
                            <img src="/stack/icons8-css3.svg" alt="icone css" /> CSS 
                            <img src="/stack/icons8-javascript.svg" alt="icone javascript" />JavaScript 
                            <img src="/stack/icons8-reagir.svg" alt="icone react" />React
                </p>
            </div>
            <div className='container-projetos'>
                <h2 className='grid-c1 grid-l1'>Construindo uma plataforma de cursos</h2>
                <video className='grid-c1 grid-l2'  height="380" controls muted loop >
                    <source src="/nlw.mp4" type="video/mp4"/>   
                </video>
                <p className='grid-c1 grid-l3'>Um plataforma de cursos contruida durante o evento "Ignite Lab". A proposta era reunir  Devs e montar uma aplicação completa com ferramentas modernas. 
                <br />
                <a href="https://github.com/Victor-Alves1/Ignite-Lab">Código no Github.</a><a href="https://ignite-lab-three-pi.vercel.app/">Clique aqui para acessar o projeto.</a>
                </p>
                <p className='grid-c1 grid-l4'>Tecnologias utilizadas:<img src="/stack/icons8-html-5.svg" alt="icone html" /> HTML
                            <img src="/stack/icons8-css3.svg" alt="icone css" /> CSS 
                            <img src="/stack/icons8-typescript.svg" alt="icone typescript" />Typescript 
                            <img src="/stack/icons8-reagir.svg" alt="icone react" />React
                            <img src="/stack/icons8-node-js.svg" alt="icone nodejs" />NodeJS
                            <img src="/stack/icons8-graphql.svg" alt="icone graphql" />GraphQL/GraphCMS
                </p>
            </div>
        </div>
    </div>
   )
}

export default Projetos