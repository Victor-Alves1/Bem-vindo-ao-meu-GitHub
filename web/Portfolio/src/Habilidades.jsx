import './Habilidades.css'

function Habilidades(){
    return (
    <div id='habilidades' className='container-habilidades centralizado'>
        <h1>Minhas habilidades</h1>
        <div className='quadro-habilidades'>
            <div className='container-listas'>
                <h2>Front End</h2>
                <ul className='list'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>TailWind CSS</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className='container-listas'>
                <h2>Back End</h2>
                <ul className='list'>
                    <li>Python(Django)</li>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>SQL Server</li>
                    <li>Restful APIs</li>
                    <li>GraphQL/GraphCMS</li>
                </ul>
            </div>
            <div className='container-listas'>
                <h2>Outros</h2>
                <ul className='list'>
                    <li>Git/GitHub</li>
                    <li>TypeScript</li>
                    <li>Cloud</li>
                    <li>Scrum</li>
                    <li>Figma</li>
                    <li>Photoshop</li>
                    <li></li>

                </ul>
            </div> 
        </div>
        <div className='container-listas container-certicacao'>
                <h2>Certificações</h2>
                <ul className='list'>
                    <li><a href="https://www.hackerrank.com/certificates/5d9d1185fc23" target='_blank'>JavaScript - HackerRank*</a> </li>
                    <li><a href="https://www.hackerrank.com/certificates/e475dcfc5aea" target='_blank'>React - HackerRank*</a></li>
                    <li><a href="https://www.hackerrank.com/certificates/a0a88dd25bae" target='_blank'>SQL - HackerRank*</a></li>
                    <li><a href="https://www.credly.com/badges/27a7a431-478e-46e2-96ec-eae35033e92f/public_url" target='_blank'>Azure(AZ-900) - Microsoft*</a></li>
                    <li><a href="https://hermes.digitalinnovation.one/certificates/A39B7532.pdf" target='_blank'>Bootcamp Python Developer</a></li>
                    <li><a href="https://www.credly.com/badges/c609912a-1275-40af-93ad-aafd5e257f2f/public_url">Google Project Management - Google*</a></li>
                    <br />
                    <span className='destaque'>*Certificações internacional - lingua inglesa</span>
                </ul>
            </div>
    </div>
   )
}

export default Habilidades