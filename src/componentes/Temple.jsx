import styles from './Temple.module.css';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
function Temple() {
    const timeline = gsap.timeline({
        repeat: false,
        defaults: { duration: 1, ease: "easeInOut" }
    })
    const e1Ref = useRef()
    const e2Ref = useRef()
    const e3Ref = useRef()
    const e4Ref = useRef()
    const e5Ref = useRef()
    const lineRef = useRef()

    const DATA = [
        { id: 1, year: 2019, name: 'Curso Superior na tecnologia', ref: e1Ref },
        { id: 2, year: 2019, name: 'Curso Senai', ref: e2Ref },
        { id: 3, year: 2022, name: 'Curso Senai', ref: e3Ref },
        { id: 4, year: 2023, name: 'Tecnologia em Radiologia', ref: e4Ref },
        { id: 5, year: 2024, name: 'Desenvolvedor Full-Stack', ref: e5Ref },
    ]
    // console.log(DATA);
    useEffect(() => {
        timeline
            .from(e1Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
            .from(e2Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
            .from(e3Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
            .from(e4Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
            .from(e5Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
            .to(e1Ref.current, { autoAlpha: 0, x: -100, duration: .5, delay: 999999999 })
            .to(e2Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
            .to(e3Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
            .to(e4Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
            .to(e5Ref.current, { autoAlpha: 0, x: -100, duration: .5 })
            .to(lineRef.current, { opacity: 0, duration: 9999999999 })
    }, [])
    return (
        <div class={styles.principal}>
            <div class={styles.mainBox}>
                <h1 class={styles.title}>Sobre Mim</h1>
                <div class={styles.wrapper}>
                    {DATA.map(el => {
                        return (
                            <div class={styles.ano} key={el.id} ref={el.ref}>
                                <h1>{el.year}</h1>
                            </div>
                        )
                    })}
                </div>
                <div class={styles.line} ref={lineRef}></div>
                <div class={styles.wrapper1}>
                    {DATA.map(el => {
                        return (
                            <div class={styles.til} key={el.id} ref={el.ref}>
                                <br></br>
                                <p>{el.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Temple