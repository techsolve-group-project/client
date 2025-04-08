import QuestionCard from "../components/QuestionCard";

export default function Homepage() {
    return(
        <>
        <div className="w-3xl m-auto pt-2 flex flex-col gap-3">
        <QuestionCard/>
        <QuestionCard/>
        <QuestionCard/>
        <QuestionCard/>
        <QuestionCard/>
        <QuestionCard/>
        </div>
        </>
    )
}