import React, { createContext, useState } from 'react';
import http from '../helpers/http';

const QuestionContext = createContext();
const QuestionContextProvider = ({ children }) => {
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
  return (
    <>
      <QuestionContext.Provider value={{ questionData: questions, fetchQuestions: fetchQuestions }}>{children}</QuestionContext.Provider>;
    </>
  );
};

export { QuestionContext };
export default QuestionContextProvider;
