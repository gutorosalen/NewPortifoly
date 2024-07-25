import styles from './Skills.module.css'
import js from '../imagens/js.svg'
import css from '../imagens/css.svg'
import html from '../imagens/html.svg'
import react from '../imagens/react.svg'
import ts from '../imagens/ts.svg'
import api from '../imagens/api.svg'
import excel from '../imagens/excel.svg'
import json from '../imagens/json.svg'
import linux from '../imagens/linux.svg'
import word from '../imagens/word.svg'
import pp from '../imagens/pp.svg'
import pdca from '../imagens/pdca.svg'

function Skills() {
    return (
        <div className={styles.skills} id='Skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={js}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={ts}></img>
                <img src={api}></img>
            </div>
            <div>
                <img src={excel}></img>
                <img src={word}></img>
                <img src={pp}></img>
                <img src={pdca}></img>
                <img src={linux}></img>
                <img src={json}></img>
            </div>
        </div>

    )
}
export default Skills