import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card.js'
import lpdnc from '../../Image/projects/lpdnc.svg'

function Projects(){
    return(
        <div className='projects' id="Projects">
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title=" LP - DNC"
            tech=" HTML, CSS e JS"
            description="Desenvolvimento de um Landing Page para o lançamento da formação em tecnologia"
            repo=""
            site=""
            />
            <Card
            img={lpdnc}
            title=" LP - DNC"
            tech=" HTML, CSS e JS"
            description="Desenvolvimento de um Landing Page para o lançamento da formação em tecnologia"
            repo=""
            site=""
            />
            <Card
            img={lpdnc}
            title=" LP - DNC"
            tech=" HTML, CSS e JS"
            description="Desenvolvimento de um Landing Page para o lançamento da formação em tecnologia"
            repo=""
            site=""
            />
            <ButtonB text='Acesse meu repostitório' link='https://github.com/AlexandreSFreire?tab=repositories'/>
        </div>
    )
}

export default Projects