import ButtonB from './ButtonB'
import styles from './Project.module.css'
import Cards from './Cards'
import arquitetura from '../imagens/projects/arquitetura.png'
import CCXP from '../imagens/projects/CCXP.png'
import Portifólio from '../imagens/projects/Portifólio.png'
import Ptp from '../imagens/projects/Previsão do tempo.png'
function Project() {
    return (
        <div className={styles.project} id="Project">
            <h1>Projetos</h1>
            <div className={styles.cards}>
                <Cards img={arquitetura}
                    title='Lade Paging Arquitetuta'
                    tech=' HTML, CSS, JS'
                    description='Projeto Front-End para realizar funcionalidade e responsividade'
                    repo='https://github.com/gutorosalen/Desafio-front-end.git'
                    site='https://d-1arquitetura.netlify.app/' />
                <Cards img={CCXP}
                    title='Site da CCPX Ingressos'
                    tech=' HTML, CSS, JS'
                    description='Projeto banca de ingresso da CCPX, Acessibilidade'
                    repo='https://github.com/gutorosalen/Desafiolade.git'
                    site='https://ladeccpx.netlify.app/' />
                <Cards img={Portifólio}
                    title='Portifólio'
                    tech=' HTML, CSS, JS, JSX, React'
                    description='Projeto mostrando um pouco mais sobre as minhas capacidades'
                    repo='https://github.com/gutorosalen/meu-projeto'
                    site='https://portfolio-gustavos-projects-b6e15ee8.vercel.app/' />
                <Cards img={Ptp}
                    title='Previsão do Tempo'
                    tech='  HTML, CSS, JS, JSX, React, API, JSON'
                    description='Projeto consumindo as API`s, as funcionalidade e responsividade'
                    repo='https://github.com/gutorosalen/clima'
                    site='https://desafioclima.netlify.app/' />
            </div>
        </div>
    )
}
export default Project