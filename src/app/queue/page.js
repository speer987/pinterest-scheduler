export default function Queue() {
  return (
    <div className="pr-64 pl-64 py-10">
      <h1 className="text-4xl font-taviraj">Pin Queues</h1>
      <div className="bg-gray-50 border-gray-200 border-1 rounded-md p-4">
        <div className="flex justify-between items-baseline">
          <h2 className="font-scope text-xl">Title of Product</h2>
          <button className="font-condensed uppercase tracking-wide bg-gray-700 text-white p-2 py-1 text-md rounded-md flex flex-row gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add a Pin
          </button>
        </div>
        <h3 className="font-scope text-lg">Link:</h3>
        <h3 className="font-scope text-lg">Queued Pins:</h3>
        <div className="scroll-smooth overflow-x-auto font-condensed uppercase text-gray-700 tracking-wider pb-4">
          <ul className="flex flex-row gap-2">
            <li>
              <p className="">date:</p>
              <div className="border-red-500 border-2 rounded-t-md shrink-0  w-40 h-60 rounded-b-0">
                Add pin
              </div>
              <button className="bg-gray-700 text-white rounded-b-md text-sm uppercase w-full  p-1.5">
                Delete from queue
              </button>
            </li>
            <li>
              <p className="">date:</p>
              <div className="border-red-500 border-2 rounded-t-md shrink-0  w-40 h-60 rounded-b-0">
                Add pin
              </div>
              <button className="bg-gray-700 text-white rounded-b-md text-sm uppercase w-full  p-1.5">
                Delete from queue
              </button>
            </li>
            <li>
              <p className="uppercase">date:</p>
              <div className="border-red-500 border-2 rounded-t-md shrink-0  w-40 h-60 rounded-b-0">
                Add pin
              </div>
              <button className="bg-gray-700 text-white rounded-b-md text-sm uppercase w-full  p-1.5">
                Delete from queue
              </button>
            </li>
            <li>
              <p className="uppercase">date:</p>
              <div className="border-red-500 border-2 rounded-t-md shrink-0  w-40 h-60 rounded-b-0">
                Add pin
              </div>
              <button className="bg-gray-700 text-white rounded-b-md text-sm uppercase w-full  p-1.5">
                Delete from queue
              </button>
            </li>
            <li>
              <p className="uppercase">date:</p>
              <div className="border-red-500 border-2 rounded-t-md shrink-0  w-40 h-60 rounded-b-0">
                Add pin
              </div>
              <button className="bg-gray-700 text-white rounded-b-md text-sm uppercase w-full  p-1.5">
                Delete from queue
              </button>
            </li>
            <li>
              <p className="uppercase">date:</p>
              <div className="border-red-500 border-2 rounded-t-md shrink-0  w-40 h-60 rounded-b-0">
                Add pin
              </div>
              <button className="bg-gray-700 text-white rounded-b-md text-sm uppercase w-full  p-1.5">
                Delete from queue
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="justify-center items-center border-gray-300 bg-gray-50 border-1 rounded-md font-condensed uppercase text-gray-700 tracking-wider p-2">
        Add a Pin Destination
      </div>
    </div>
  );
}
