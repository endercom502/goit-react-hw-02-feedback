import React from "react";
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Sections';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import style from './App.module.css';



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
