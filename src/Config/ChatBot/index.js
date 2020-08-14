import React from 'react';
import ChatBot from 'react-simple-chatbot';

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
        end: true,
    }
]

function Chat() {

    function handleEnd({values}){
       
    }

    return (
        <ChatBot
            handleEnd = {handleEnd}
            steps={steps}
        />
    ) 
}

export default Chat;