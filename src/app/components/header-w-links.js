import "../globals.css";

export default function HeaderWithLinks() {
  return (
    <div className="w-full h-22 flex items-center shadow-md">
      <ul className="w-full flex justify-between items-center p-6">
        <div className="text-3xl normal-case font-taviraj">
          <li>Pincushion</li>
        </div>
        <div className="uppercase flex font-scope text-dg-500">
          <li className="border-y-2 border-x-1 hover:bg-dg-500 hover:text-white transition ease-in-out border-dg-500 px-6 py-2 rounded-l-full">
            Queue
          </li>
          <li className="border-y-2 border-x-1 hover:bg-dg-500 hover:text-white transition ease-in-out px-6 py-2 border-dg-500">
            Calendar
          </li>
          <li className="border-y-2 border-x-1 hover:bg-dg-500 hover:text-white transition ease-in-out px-6 py-2 border-dg-500">
            Add Pin Destination
          </li>
          <li className="border-y-2 border-x-1 hover:bg-dg-500 hover:text-white transition ease-in-out px-6 py-2 border-dg-500">
            Create Pin Without Destination
          </li>
          <li className="border-y-2 border-x-1 hover:bg-dg-500 hover:text-white transition ease-in-out px-6 py-2 rounded-r-full border-dg-500">
            About
          </li>
        </div>
      </ul>
    </div>
  );
}
