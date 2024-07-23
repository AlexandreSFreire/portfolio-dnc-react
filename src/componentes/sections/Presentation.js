import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';

function Presentation(){
    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Alexandre Freire!</h1>
            <p>
                Sou uma pessoa apaixonada por tecnologia e novidades do mercado. <br/>
                Como desenvolvedor Front-End, busco criar sites utilizando as<br/>
                ferramentas mais atuais no mercado de trabalho.<br/>
                Sempre estou a procura de desafios e de atualizar minhas bibliotecas <br/>
                com as ferramentas mais recentes disponíveis.
            </p>
            <ButtonA link='https://www.linkedin.com/in/alexandre-freire-194694303' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation