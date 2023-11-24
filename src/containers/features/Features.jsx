import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Large Scale',
    text: 'GPT-3 is one of the largest language models to date, with 175 billion parameters, allowing it to capture and understand complex patterns in data.',
  },
  {
    title: 'Versatility',
    text: 'It exhibits versatility by performing well across a wide range of natural language processing tasks, including text completion, question-answering, translation, summarization, and more, without task-specific training.',
  },
  {
    title: 'Zero-shot and Few-shot Learning',
    text: 'GPT-3 can perform tasks with minimal examples or even in a "zero-shot" manner, showcasing its ability to generalize and generate contextually relevant responses without extensive task-specific training data.',
  },
  {
    title: 'Contextual Understanding',
    text: 'GPT-3 excels in understanding and generating contextually relevant responses by considering the entire context of the input, making it effective for complex language tasks where context is crucial.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;