import React from "react";
import Quizoption from "../QuizOption/Quizoption";
import './Question.css'
import Swal from "sweetalert2";

const Question = ({ questios }) => {
  const { question, options, correctAnswer } = questios;
  console.log(options);

  const handleCorrectAns = () =>{
    Swal.fire(correctAnswer)
  }
  return (
    <div className="text-center">
      <li>
        <span className="text-2xl font-bold">{question}</span>
       <div className='quiz-option-container my-16'> {options.map((op, index) => (
          <Quizoption
            correctAnswer={correctAnswer}
            qo={op}
            key={index}
          ></Quizoption>

        ))} <button 
        onClick={handleCorrectAns}
        className="mx-auto bg-white text-blue-800 py-4 px-20 rounded-xl text-2xl font-bold">Ans</button>
        </div>
      </li>
    </div>
  );
};

export default Question;
