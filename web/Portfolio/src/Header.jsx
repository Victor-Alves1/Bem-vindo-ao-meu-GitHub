import './Header.css'

function scrollToPage(local){
    console.log(local)
    let scrollingTo = window.document.getElementById(local)
    console.log(scrollingTo)
    scrollingTo.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      })

}

function Header(){
    return (
    <div className='header'>
        <div className='navbar'>
            <span onClick={()=>scrollToPage('home')}>Home</span>
            <span onClick={()=>scrollToPage('habilidades')}>Habilidades e experiências</span>
            <span onClick={()=>scrollToPage('projetos')}>Projetos</span>
            <span onClick={()=>scrollToPage('eu')}>Quem sou eu</span>
        </div>
    </div>
   )
}

export default Header