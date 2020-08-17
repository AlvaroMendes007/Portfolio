import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`

const Iframe = styled.iframe`
    border-radius: 10px;
`

const repositorios = [
    {
        id: '1',
        name: 'Previsão do tempo',
        url: 'https://weather-woad.vercel.app/',
    },
    {
        id: '2',
        name: 'MendesFlix',
        url: 'https://mendesflix.vercel.app'
    }
]

const optionsChat = [
    { value: repositorios[0].url, label: repositorios[0].name, trigger: '4' },
    { value: repositorios[1].url, label: repositorios[1].name, trigger: '4' }
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
                /> :
                <>
                </>
            }
        </Main>

    )
}

export default Chat;