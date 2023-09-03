export default function FilesAndFolders() {
  return (
    <>
      <div className="flex flex-row gap-7 p-3 pt-5 flex-wrap">
        <div className="flex flex-col w-24  pr-5 hover:bg-slate-300 p-2 rounded-sm ">
          <img
            src="src\assets\images\html-icon.svg"
            alt="is this not working"
          />
          <h1 className="text-center font-bold">&nbsp;&nbsp;&nbsp;about</h1>
        </div>
        <div className="flex flex-col w-24  pr-5 hover:bg-slate-300 p-2 rounded-sm">
          <img
            src="src\assets\images\html-icon.svg"
            alt="is this not working"
          />
          <h1 className="text-center font-bold">&nbsp;&nbsp;&nbsp;projects</h1>
        </div>
        <div className="flex flex-col w-24  pr-5 hover:bg-slate-300 p-2 rounded-sm">
          <img
            src="src\assets\images\html-icon.svg"
            alt="is this not working"
          />
          <h1 className="text-center font-bold">&nbsp;&nbsp;&nbsp;connect</h1>
        </div>
        <div className="flex flex-col w-24  pr-5 hover:bg-slate-300 p-2 rounded-sm">
          <img src="src\assets\images\pdf (2).png" alt="is this not working" />
          <h1 className="text-center font-bold">&nbsp;&nbsp;&nbsp;resume</h1>
        </div>
      </div>
    </>
  );
}
