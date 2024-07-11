import styles from './Navbar.module.css'
import github from '../imagens/github.svg'
import linkden from '../imagens/linkden.svg'
function Navbar() {

    return (
        <div>
            <div class={styles.topnav}>
                <div id={styles.menu}>
                    <a href="#Project" >Projetos</a>
                    <a href="https://portfolio-gustavos-projects-b6e15ee8.vercel.app/">Tecnologias</a>
                    <a href="#Temple">Sobre Mim</a>
                </div>
                <div id={styles.links}>
                    <a href='https://github.com/gutorosalen' ><img src={github}></img></a>
                    <a href='https://www.linkedin.com/in/gustavorosalen/'><img src={linkden} /></a>
                </div>
            </div>
        </div>

    )

}
export default Navbar