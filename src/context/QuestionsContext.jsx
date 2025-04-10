import React, { createContext, useEffect, useState } from 'react';
import http from '../helpers/http';
import { socket } from '../util/socket';

const QuestionContext = createContext();
const QuestionContextProvider = ({ children }) => {

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    socket.on('question:info', (question) => {
      console.log(question);

      setQuestions((current) => [...current, question])
    })

    return() => {
      socket.off('question:info')
    }
  }, [])
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
  return (
    <>
      <QuestionContext.Provider value={{ questionData: questions, fetchQuestions: fetchQuestions }}>{children}</QuestionContext.Provider>;
    </>
  );
};

export { QuestionContext };
export default QuestionContextProvider;
