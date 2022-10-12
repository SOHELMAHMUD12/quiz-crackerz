import React from "react";
import Swal from "sweetalert2";
import './Quizoption.css'

const Quizoption = ({ qo, correctAnswer }) => {
  const handleAns = (option) => {
    if (option === correctAnswer) {
      Swal.fire("Good job!", "Correct!", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Answer is Wrong!",
      });
    }
  };

  return (
    <div>
      <p onClick={() => handleAns(qo)} className="my-6 ">
        <span className=" option  bg-gray-600 py-5 px-10 rounded-lg text-white">
          {qo}
        </span>
      </p>
    </div>
  );
};

export default Quizoption;
