/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import { QuestionContext } from '../context/QuestionsContext';
import { socket } from '../util/socket';


export default function Homepage() {
  // useEffect(() => {
  //   socket.on('welcome_msg', arg => {
  //     console.log(arg);
  //   })
  // }, [])
  // console.log(socket);
  useEffect(() => {
    socket.on('welcome_msg', (arg) => {
      console.log(arg);
    });

    return () => {
      socket.off('welcome_msg');
    };
  }, []);

  //question post context
  const { questionData, fetchQuestions } = useContext(QuestionContext);

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <>
      <div className="max-w-3xl p-5 m-auto pt-2 flex flex-col gap-3">
        {questionData.map((question, index) => {
          return (
            <QuestionCard
              key={index}
              {...question}
            />
          );
        })}
      </div>
    </>
  );
}
