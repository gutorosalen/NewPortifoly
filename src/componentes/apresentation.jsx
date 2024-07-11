import styles from './apresentation.module.css'
import ButtonA from './ButtonA'
import { useState, useEffect } from 'react'

function Apresentation() {
    const [Text, setText] = useState('');
    const Info = ['Gustavo', 'Desenvolvedor Full-Stack', 'Auxiliar e Analista de dados'];
    const [Loop, setLoop] = useState(0);
    const [Isdeleting, setIsdeleting] = useState(false);
    const Periody = [100];
    const [Delta, setDelta] = useState(200)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, Delta)
        return () => { clearInterval(ticker) }
    }, [Text])

    const toType = () => {
        let i = Loop % Info.length;
        let fullText = Info[i]
        let updateText = Isdeleting ? fullText.substring(0, Text.length - 1) : fullText.substring(0, Text.length + 1)

        setText(updateText);

        if (!Isdeleting && updateText === fullText) {
            setIsdeleting(true);
            setDelta(Periody);
        } else if (Isdeleting && updateText === '') {
            setIsdeleting(false);
            setDelta(Periody);
            setLoop(Loop + 1);
        }

    }

    return (
        <div id={styles.slider}>
            <h1>
                Olá, sou {Text}.
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