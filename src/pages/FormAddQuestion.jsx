import { useState } from 'react';
import http from '../helpers/http';
import { useNavigate } from 'react-router';
import { socket } from '../util/socket';

export default function FormAddQuestion() {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  async function submitQuestion(event) {
    event.preventDefault();
    try {
      let dataQuestion = await http({
        url: '/questions',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        data: {
          title,
          text: question,
        },
      });
      console.log(dataQuestion.data.id);
      socket.emit("post:question", dataQuestion.data.id)
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="bg-slate-900 h-screen w-screen flex justify-center items-center">
        <form
          className="max-w-sm mx-auto w-lg p-4"
          onSubmit={submitQuestion}
        >
          <h2 className="dark:text-white font-bold text-2xl mb-4 text-center">Add Question</h2>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Question Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Question
            </label>
            <input
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Insert Question Here..."
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
          >
            Create Question
          </button>
        </form>
      </div>
    </>
  );
}
