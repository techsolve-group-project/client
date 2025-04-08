export default function QuestionCard() {
    return(
        <div className="bg-white rounded-md shadow-sm p-4">
  <div className="flex items-center justify-between mb-2">
    <div className="text-gray-700 text-sm">
      <span>0 votes</span>
      <span className="ml-2">0 answers</span>
    </div>
  </div>
  <h2 className="text-lg font-semibold text-blue-600 hover:underline">
    How to cache image downloads for GitHub actions-runner-controller runners?
  </h2>
  <p className="text-gray-700 text-sm mt-1">
    When running containerized GitHub action jobs it obviously is extremely
    impractical to download the entire required container image from scratch
    every time. Yet it seems like GitHub's actions-runner-...
  </p>
  <div className="flex items-center justify-between mt-2">
  </div>
</div>

    )
}