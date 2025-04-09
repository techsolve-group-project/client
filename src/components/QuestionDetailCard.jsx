import dateFormatter from '../helpers/dateFormatter';

export default function QuestionDetailCard({ createdAt, text, title, name, email }) {
  const formattedDate = dateFormatter(createdAt);
  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <h2 className="text-xl font-semibold text-gray-600 hover:underline">{title}</h2>
      <div className="flex flex-col items-start text-sm text-gray-500 mt-2">
        <span>
          Asked <span className="font-medium">{formattedDate}</span>
        </span>
        <span className="my-2">By {name}</span>
        <span>{email}</span>
      </div>
      <div className="flex items-start mt-4 space-x-3">
        <p className="text-gray-700 leading-relaxed text-2xl">{text}</p>
      </div>
    </div>
  );
}
