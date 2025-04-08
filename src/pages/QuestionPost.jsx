import CommentCard from "../components/CommentCard";
import CommentCardAI from "../components/CommentCardAI";
import QuestionDetailCard from "../components/QuestionDetailCard";

export default function QuestionPost() {
    return(
        <>
        <div className="w-3xl m-auto pt-2">
        <QuestionDetailCard/>
        <div>
            <h1>Answers</h1>
            <CommentCardAI />
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </div>

        </div>
        </>
    )
}