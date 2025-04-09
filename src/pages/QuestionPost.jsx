import { useState } from "react";
import CommentCard from "../components/CommentCard";
import CommentCardAI from "../components/CommentCardAI";
import QuestionDetailCard from "../components/QuestionDetailCard";

export default function QuestionPost() {
    let [comment, setComment] = useState('')
    function changeComment(event) {
        setComment(event.target.value)
        console.log(event.target.value);
    }

    async function submitComment() {
        try {
            console.log({comment});
            setComment('')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <div className="w-3xl m-auto pt-2">
        <QuestionDetailCard />
        <form>
         
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Kepikiran sesuatu setelah liat pertanyaan ini?"
              value={comment}
              onChange={changeComment}
            />
            <div className="py-5">
  <button
    type="button"
    onClick={submitComment}
    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex flex-col items-end"
  >
    Submit komentar
  </button>
</div>

        </form>
        <div>
          <h1 className="py-5 text-m font-semibold text-gray-600">Answers</h1>
          <CommentCardAI />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>
    </>
  );
}
