export default function Textbox({ label, wordcount, isLongform, isRequired }) {
  return (
    <div className="bg-gray-50 rounded-md flex flex-col m-2 p-2 pt-1 border-1 border-gray-300">
      <div className="flex text-sm font-condensed justify-between text-gray-800">
        <label className="text-sm font-condensed uppercase tracking-wider">
          {label}
          {isRequired ? "*" : ""}
        </label>
        <p>{wordcount}</p>
      </div>
      {isLongform ? (
        <textarea className="resize-y" />
      ) : (
        <input className=""></input>
      )}
    </div>
  );
}
