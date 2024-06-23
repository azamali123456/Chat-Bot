import React from 'react';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomComponent from './component/CustomComponent';

function App() {
  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
      id: '4',
      message: 'How can I assist you?',
      trigger: '5',
    },
    {
      id: '5',
      user: true,
      trigger: 'customComponent',
    },
    {
      id: 'customComponent',
      component: <CustomComponent />,
      waitAction: true,
      trigger: ({ value }) => {
        const userInput = value.trim().toLowerCase();
        return userInput
      
      },
    },
    {
      id: '7',
      message: 'How can I assist you?',
      trigger: 'customComponent', // Go back to CustomComponent for further interactions
    },
    {
      id: '8',
      message: 'Thank you! Have a great day!',
      end: true,
    },
    {
      id: '9',
      message: 'I am fine. How about you?',
      trigger: 'customComponent', // Go back to CustomComponent after handling 'How are you?' query
    },
    {
      id: '10',
      message: 'It is good find you healthy.How can I help with something specific?',
      trigger: 'customComponent', // Go back to CustomComponent after handling 'How are you?' query
    },
    {
      id: '11',
      message: 'I am a chatbot designed to assist you with various queries. How can I help you today?',
      trigger: 'customComponent', // Go back to CustomComponent after handling 'Who are you?' query
    },
    {
      id: '100',
      message: `I did not understand your query. Please repeat it understandable manner?`,
      trigger: 'customComponent', // Go back to CustomComponent after handling 'Who are you?' query
    },
  ];
  
  
  
  
  
  

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="container text-center">
        <h1 className="text-center mb-4">Chat Bot Application</h1>
        <ChatBot steps={steps} />
      </div>
    </div>
  );
}

export default App;
