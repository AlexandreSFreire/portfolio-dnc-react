import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card.js'
import lpdnc from '../../Image/projects/lpdnc.svg'
import DNCWeather from '../../Image/projects/DNCWeather.JPG'
import PortfolioDNC from '../../Image/projects/PortfolioDNC.JPG'

function Projects(){
    return(
        <div className='projects' id="Projects">
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title=" LP - DNC"
            tech=" HTML, CSS e JS"
            description="Desenvolvimento de um Landing Page para o lançamento da formação em tecnologia"
            repo="https://github.com/AlexandreSFreire/projeto-landing-page"
            site="https://projectlanding-page-dnc.netlify.app/"
            />
            <Card
            img={DNCWeather}
            title=" DNCWeather - DNC"
            tech=" HTML, CSS e JS"
            description="Desenvolvimento de um Landing Page para consulta do tempo de acordo com o local (API)"
            repo="https://github.com/AlexandreSFreire/DncWeather"
            site="https://d2dncweather.netlify.app/"
            />
            <Card
            img={PortfolioDNC}
            title=" Porfólio"
            tech=" HTML, CSS e React"
            description="Desenvolvimento de um Porfólio para apresentação profissional de projetos e tecnologias"
            repo="https://github.com/AlexandreSFreire/portfolio-dnc-react"
            site="https://portfolio-dnc-react-xi.vercel.app/"
            />
            <ButtonB text='Acesse meu repostitório' link='https://github.com/AlexandreSFreire?tab=repositories'/>
        </div>
    )
}

export default Projects