import { useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import http from '../helpers/http';
import { useState } from 'react';

export default function Homepage() {
  const [questions, setQuestions] = useState([]);
  const fetchQuestions = async () => {
    try {
      const result = await http({
        method: 'GET',
        url: '/questions',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      setQuestions(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <>
      <div className="max-w-3xl p-5 m-auto pt-2 flex flex-col gap-3">
        {questions.map((question, index) => {
          return (
            <QuestionCard
              key={index}
              title={question.title}
              text={question.text}
              User={question.User}
              Comments={question.Comments}
            />
          );
        })}
      </div>
    </>
  );
}
