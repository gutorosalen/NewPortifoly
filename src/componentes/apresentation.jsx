import styles from './apresentation.module.css'
import ButtonA from './ButtonA'

function Apresentation() {

    return (
        <div id={styles.slider}>
            <h1>
                Olá, sou Gustavo.
            </h1>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Sou um apaixonado por tecnologia e soluções inovadoras.<br />
                Como Auxiliar, Analista de T.I e Desenvolvedor full-stack, <br />
                eu tenho o compromisso de resolver problemas complexos <br />
                e trazer resultados excepcionais para os negócios.<br />
                Meus projetos são experiêcias que foi adquirindo ao longo<br />
                da jornada, estou sempre em busca de novos desafios.<br />
            </p>
            <div id={styles.button}>
                <ButtonA link='https://github.com/gutorosalen' text='Saiba Mais!' />
            </div>
        </div>
    )
}
export default Apresentation