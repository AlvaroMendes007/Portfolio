import React, {useState} from 'react';
import styled from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { Repositorios } from '../../data';

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;

    @media(max-width: 650px){
        height: 100%; 
        display: block;

        iframe{
            height: 600px;
        }
    }
`

const Iframe = styled.iframe`
    border-radius: 10px;
`

const optionsChat = [
    { value: Repositorios[0].url, label: Repositorios[0].name, trigger: '4' },
    { value: Repositorios[1].url, label: Repositorios[1].name, trigger: '4' }
]

const steps = [
    {
        id: '1',
        message: 'Olá, tudo bem? \nMe chamo Jack, assistente virtual.',
        trigger: 2,
    },
    {
        id: '2',
        message: 'Meu criador é o Álvaro Mendes, fui criado no dia 14/08/2020, feito em React.\nPela biblioteca react-simple-chatbot.',
        trigger: 3,
    },
    {
        id: '3',
        options: optionsChat
    },
    {
        id: '4',
        message: 'Estou gerando a página...',
        trigger: 5
    },
    {
        id: '5',
        message: 'Feito!',
        end: true
    },
]

var url = "";

function Chat() {

    const [page, setPage] = useState(false);

    function handleEnd({ values }) {
        setPage(true);
        url = values[0];
    }

    return (
        <Main>
            <ChatBot
                handleEnd={handleEnd}
                steps={steps}
            />
            {page ?
                <Iframe
                    src={url}
                    title={url}
                    width="100%"
                    allowfullscreen="allowfullscreen"
                />:
                <>
                </>
            }
        </Main>
    )
}

export default Chat;