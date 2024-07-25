import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import {useEffect, useState} from 'react'

function Presentation(){

    const [text, setText] = useState('')
    const toRotate = ['Alexandre S. Freire!', 'Desenvolvedor Front End']
    const [loop, setLoop] = useState(0)
    const [isDeleting, SetIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)
    

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        
        return()=>{clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring (0, text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            SetIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            SetIsDeleting(false)
            setDelta(period)
            setLoop(loop+1)
        }
    }

    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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