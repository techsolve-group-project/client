export default function CommentCard() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4">
      <div className="flex items-start space-x-3">
        <div className="flex flex-col items-center">
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
          <span className="text-lg font-semibold text-gray-800">157</span>
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
// <<<<<<< feat/comment-textarea
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-xs">
              Tempel nama kamu disini commented{" "}
              <time dateTime="2020-08-06T20:01:00">Aug 6, 2020 at 20:01</time>
// =======
//         <div className="flex-1">
//           <div className="mt-4 py-2 px-3 bg-green-100 border border-green-300 rounded-md">
//             <p className="text-green-700 leading-relaxed mt-1">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum corrupti, nam aliquid accusantium velit voluptas praesentium voluptates. Odio consectetur aut dicta deleniti? Vitae, quidem impedit. Soluta magni vero nulla
//               commodi.
// >>>>>>> dev
            </p>
          </div>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <div className="flex items-center space-x-4"></div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-xs">
                  created <time dateTime="2020-08-06T20:01:00">Aug 6, 2020 at 20:01</time>
                </p>
                <div className="flex items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
