import './Header.css'

function scrollToPage(local){
    let scrollingTo = window.document.getElementById(local)
    scrollingTo.scrollIntoView(true)

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