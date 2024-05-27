import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';

export const InnerMcq = () => {
    const [mcqData, setMcqData] = useState([]);
    const [currentState, setCurrentState] = useState(0);
    const [ans, setAns] = useState(0);
    const [correct, setCorrect] = useState(false);
    const param = useParams();

    const changeState = () => {
        setCurrentState(currentState + 1);
    }

    useEffect(() => {
        fetch("https://quizapi.io/api/v1/questions?apiKey=Ttbcqy4P68U3jZO3cenCXuPD795zV6mq3AXU4ORn&category=" + param.id + "&limit=20", {method : 'GET'}).then((res) => { return res.json() }).then((res) => {setMcqData(res)}).catch(error => console.error('Error fetching data:', error));
    }, [param.id])

  return (
    <div className='overflow-y-hidden flex flex-col h-screen items-center' style={{backgroundColor: '#B7C0EE'}}>
        <Header />
        <div className='flex flex-col gap-10 justify-center items-center mt-5 w-full overflow-hidden bg-white p-5'>
            <div className='flex gap-10 justify-between shadow-xl w-full p-5'>
                <div className='flex gap-3'> <span className='font-bold'>Category :</span>
                    {mcqData.length > 0 && currentState < mcqData.length ? (
                        <div>{mcqData[currentState].tags[0].name}</div>
                        ) : (<></>)}
                </div>
                <div className='flex gap-3'> <span className='font-bold'>Difficulty :</span>
                    {mcqData.length > 0 && currentState < mcqData.length ? (
                        <div>{mcqData[currentState].difficulty}</div>
                        ) : (<></>)}
                </div>
            </div>
            <div>
            {mcqData.length > 0 && currentState < mcqData.length ? (
                        <div className='font-bold text-3xl'>{mcqData[currentState].question}</div>
                        ) : (<></>)}
            </div>
            <div className='w-full' id='final_ans'>
                {
                    mcqData.length > 0 && currentState < mcqData.length ?
                    (
                        <div className='w-full flex flex-col gap-6'>
                        <button className='border w-full py-2 rounded-lg bg-blue-100 font-bold text-lg  focus:bg-red-200' onClick={() => { if(mcqData[currentState].correct_answers.answer_a_correct == "true" ) {setCorrect(true);} else { setCorrect(false)}; setAns(1); }} >
                            {mcqData[currentState].answers.answer_a}
                        </button>
                        <button className='border w-full py-2 rounded-lg bg-blue-100 font-bold text-lg focus:bg-red-200' onClick={() => { if(mcqData[currentState].correct_answers.answer_b_correct == "true" ) {setCorrect(true);} else { setCorrect(false)}; setAns(2); }} >
                            {mcqData[currentState].answers.answer_b}
                        </button>
                        <button className='border w-full py-2 rounded-lg bg-blue-100 font-bold text-lg focus:bg-red-200' onClick={() => { if(mcqData[currentState].correct_answers.answer_c_correct == "true") {setCorrect(true);} else { setCorrect(false)}; setAns(3); }}>
                            {mcqData[currentState].answers.answer_c}
                        </button>
                        <button className='border w-full py-2 rounded-lg bg-blue-100 font-bold text-lg focus:bg-red-200' onClick={() => { if(mcqData[currentState].correct_answers.answer_d_correct == "true") {setCorrect(true);} else { setCorrect(false)}; setAns(4); }} >
                            {mcqData[currentState].answers.answer_d}
                        </button>
                        </div>
                    ) : (<></>)
                }
            </div>
            <div className='flex gap-5 w-full justify-evenly'>
                <div className={ans === 0  ? 'hidden' : ''}>{
                        correct == true ? <span className="text-xl font-bold text-green-400">Correct Answer</span> :
                         <spna className="text-xl font-bold text-red-400"> OOPS!! Wrong Answer</spna>
                    }</div>
                <button className='bg-red-300 font-bold px-5 py-1 text-lg rounded-xl' onClick={() => {changeState(); setCorrect(false); setAns(0)}}>Next</button>
            </div>
        </div>
    </div>
  )
}
