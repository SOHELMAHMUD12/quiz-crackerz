import React from 'react';

const Quizoption = ({qo,correctAnswer
}) => {
    const handleAns = (option) =>{
        if(option === correctAnswer){
            alert('Answer Correct')
        }
        else{
            alert("Answer Wrong")
        }
    }

    return (
        <div>
           <p 
           onClick={()=>handleAns(qo) }
           className='my-6'><span className='bg-gray-600 py-2 px-6 rounded-lg text-white'>{qo} </span></p> 
        </div>
    );
};

export default Quizoption;