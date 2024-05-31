
import style from './nav.module.css'

function Navbar(){

    const nav = ["Home","Categories","About","Contect"]
    const navLI = nav.map((li,i)=>{
        return <li key={i} >{li}</li>
    })
    return(
        <>
        <div className={style.navContainer}>
            <div>
            <p className={style.logo}>logo</p>
            </div>
        <div>
            <ul className={style.navBar}>
                {navLI}
            </ul>
        </div>
        </div>
        </>
    )
}



export default Navbar
