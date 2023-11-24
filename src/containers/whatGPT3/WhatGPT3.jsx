import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is a powerful and highly advanced language model developed by OpenAI. It consists of 175 billion parameters, enabling it to understand and generate human-like text across a wide range of tasks." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 works as a chatbot by leveraging its extensive pre-training on diverse internet text. It interprets user input and generates contextually relevant responses based on patterns it learned during training." />
      <Feature title="Knowledgebase" text=" GPT-3 can be utilized to understand and generate information across a wide range of topics. It can answer questions, provide explanations, and generate content based on the input it receives." />
      <Feature title="Education" text="It can generate instructional content, assist with homework, answer questions, and provide explanations across a multitude of subjects." />
    </div>
  </div>
);

export default WhatGPT3;