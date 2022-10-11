import React from "react";
import './QuizBg.css'

const QuizBg = () => {
  return (
    <div className="quizBg grid h-fit place-items-center  text-white text-center ">
      <div className="layer">
        <div className="text">
          <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold my-2 ">
          Quiz For Digital Programming
          </h1>
          <p className="text-slate-100  ">
          Computer programming is the process of performing a particular computation or more generally, accomplishing a specific computing result, usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms usually in a chosen programming language, commonly referred to as coding.
          </p>
        </div>
      </div>
    </div>

  );
};

export default QuizBg;
