import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const quizs =useLoaderData()
    console.log(quizs)
    const {data} = quizs
    const {name,logo,questions} = data
    return (
        <div >
          {questions.map(question =><Question key={question.id} questios= {question}></Question> )}
        </div>
    );
};

export default Quiz;