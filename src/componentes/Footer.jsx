import github from '../imagens/github.svg'
import linkden from '../imagens/linkden.svg'
import figma from '../imagens/figma.svg'
import styles from '../componentes/Footer.module.css'
function Footer() {

    return (
        <div class={styles.footer}>
            <div class={styles.contact}>
                <div>
                    <h1>Meu contato:<br></br>
                        11 94387-1982</h1>
                </div>
                <div>
                    <h1>E-mail:</h1>
                    <h1>gustavorosalen@hotmail.com</h1>
                </div>
            </div>
            <div class={styles.info}>
                <a href='https://github.com/gutorosalen' ><img src={github}></img></a>
                <a href='https://www.linkedin.com/in/gustavorosalen/'><img src={linkden} /></a>
                <a href='#'><img src={figma} /></a>
            </div>
        </div>
    )

}
export default Footer