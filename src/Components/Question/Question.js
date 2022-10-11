import React from 'react';
import Quizoption from '../QuizOption/Quizoption';

const Question = ({questios}) => {
    const {question, options, correctAnswer
    } = questios
    console.log(options);
    return (
        <div className='text-center'>
           <li><span className='text-2xl font-bold'>{question}</span> {options.map((op, index) => <Quizoption correctAnswer ={correctAnswer
}
 qo ={op} key= {index} ></Quizoption> )}  </li> 
        </div>
    );
};

export default Question;