import { Textbox, Dropdown } from "@/app/components";
export default function CreatePinWithLink() {
  return (
    <div>
      {/* <HeaderWithLinks selected={"create-pin"} /> */}
      <div className="pr-64 pl-64 py-10">
        <h1 className="text-4xl font-taviraj">Create Pin with Destination</h1>
        <p className="font-taviraj">I'm creating pins for _____________.</p>
        <div className="flex flex-col gap-2">
          {/* <div className="gap-2"> */}
          <div className="flex gap-2">
            <div className="gap-2 flex flex-col justify-center items-center border-gray-300 bg-gray-50 border-1 rounded-md w-2/6 font-condensed uppercase text-gray-700 tracking-wider">
              <p>Upload Pin Image*</p>
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
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
            <div className="w-4/6 flex flex-col gap-2">
              <Textbox
                isRequired={true}
                isLongform={false}
                label={"Title"}
                wordcount={100}
              />
              <Textbox
                isRequired={true}
                isLongform={true}
                label={"Description"}
                wordcount={800}
              />
              <Textbox
                isRequired={false}
                isLongform={true}
                label={"Alt Text"}
                wordcount={500}
              />
            </div>
          </div>
          <div className="flex flex-row w-full gap-2">
            <div className="w-1/2">
              <Dropdown label={"Pin Destination"} />
            </div>
            <div className="w-1/2">
              <Dropdown label={"Board Name"} />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
