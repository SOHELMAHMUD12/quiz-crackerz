import React from "react";
import { Link } from "react-router-dom";
import './Subject.css';

const Subject = ({subject}) => {
    console.log(subject);
    const {logo, name, total,id} = subject
  return (
    <Link to={`/subject/${id}`}><div className="subject">
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
        src={logo}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
        {name}
        </h2>
      </div>
      <p className="dark:text-gray-100 mb-5">
        Total Quiz: {total}
      </p>
      <button className="bg-blue-600 py-2 px-4 rounded-lg w-full">Quiz Start</button>
    </div>
  </div></Link>
  );
};

export default Subject;
