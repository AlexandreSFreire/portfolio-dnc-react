import styles from './Skills.module.css';
import css from '../../Image/skills/css.svg'
import html from '../../Image/skills/html.svg'
import javascript from '../../Image/skills/javascript.svg'
import react from '../../Image/skills/react.svg'
import typescript from '../../Image/skills/typescript.svg'

function Skills(){
    return(
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco as minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                <img src={typescript}/>
            </div>
        </div>
    )
}

export default Skills