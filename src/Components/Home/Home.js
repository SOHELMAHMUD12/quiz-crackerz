import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizBg from '../QuizBg/QuizBg';
import Subject from '../Subjects/Subject';
import './Home.css'

const Home = () => {
    const subjects = useLoaderData();
    console.log(subjects); 
    const {data} = subjects
    return (
        <div>
            <QuizBg/>
            <div className='subject-container'>
            {data.map(subject => <Subject key={subject.id} subject={subject}></Subject>)}

            </div>
        </div>
    );
};

export default Home;