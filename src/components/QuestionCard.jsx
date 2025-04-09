import { Link } from 'react-router';

export default function QuestionCard({ id, title, text, User, Comments }) {
  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-gray-700 text-sm">
          <span className="author-info">By {User.name}</span>
          <span className="ml-2">{Comments.length} answers</span>
        </div>
      </div>
      <Link
        to={`/questions/${id}`}
        className="text-lg font-semibold text-blue-600 hover:underline"
      >
        {title}
      </Link>
      <p className="text-gray-700 text-sm mt-1">{text.length > 100 ? text.slice(0, 100) + '...' : text}</p>
      <div className="flex items-center justify-between mt-2"></div>
    </div>
  );
}
