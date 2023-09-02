import FilesAndFolders from "./FilesAndFolders";
export default function FileManager() {
  return (
    <>
      <div className="bg-hero-pattern h-screen w-screen bg-cover flex flex-col items-center justify-center ">
        <div className="w-3/5 h-4/5 rounded-2xl  flex">
          <div className="w-1/4 bg-slate-200 rounded-l-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 "></div>
          <div className=" w-3/4 bg-white rounded-r-2xl flex flex-col">
            <div className="w-full h-8  flex flex-row-reverse gap-3 border-b border-black border-opacity-40 p-1 rounded-tr-2xl pl-2">
              <div className="hover:bg-red-600 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </div>
            <FilesAndFolders />
          </div>
        </div>
      </div>
    </>
  );
}
