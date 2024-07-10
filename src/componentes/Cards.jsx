import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'
function Cards({ img, title, tech, description, repo, site }) {

    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true)
    }
    function infoOff() {
        setInfo(false)
    }

    return (
        <div onMouseLeave={infoOff} className={styles.cards} >
            <a onMouseEnter={infoOn} href={site}>
                <img src={img} alt='ERRO' />
            </a>
            <div>
                {info === true && (
                    <section>
                        <h3>{title}</h3>
                        <br />
                        <p>Tecnologias:{tech}</p>
                        <p>{description}</p>
                        <br />
                        <ButtonB text="Acesse o Repositório" link={repo} />
                    </section>
                )}
            </div>
        </div>
    )
}
export default Cards