// import About from "./About";
import Sidebar from "./Sidebar";
import FilesAndFolders from "./FilesAndFolders";
import HomeCard from "./HomeCard";
function redirectto(str) {
  window.location.href = str;
}
export default function FileManager() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen py-3 bg-cover bg-hero-pattern">
        <div className="flex w-4/5 h-full rounded-2xl">
          <div className="w-1/4 bg-slate-200 rounded-l-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 ">
            <Sidebar />
          </div>
          <div className="flex flex-col w-3/4 bg-white rounded-r-2xl">
            <div className="flex flex-row-reverse w-full h-8 gap-3 p-1 pl-2 border-b border-black border-opacity-40 rounded-tr-2xl">
              <div
                className="rounded-md hover:bg-red-600"
                onClick={() => {
                  redirectto("https://github.com/JoJosuk");
                }}
              >
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
            <HomeCard />
          </div>
        </div>
      </div>
    </>
  );
}
