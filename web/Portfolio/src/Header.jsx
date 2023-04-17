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
            <div onClick={()=>scrollToPage('home')}>Home</div>
            <div onClick={()=>scrollToPage('habilidades')}>Habilidades e experiências</div>
            <div onClick={()=>scrollToPage('projetos')}>Projetos</div>
            <div onClick={()=>scrollToPage('eu')}>Quem sou eu</div>
        </div>
    </div>
   )
}

export default Header