import React from 'react';
import ChatBot from 'react-simple-chatbot';

function Chat() {
    return (
        <ChatBot
            steps={[
                {
                    id: 'hello-world',
                    message: 'Hello World!',
                    end: true,
                },
            ]}
        />)
}

export default Chat;