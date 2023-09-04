function redirectto(str) {
  window.location.href = str;
}
export default function FilesAndFolders() {
  return (
    <>
      <div className="flex flex-row flex-wrap p-3 pt-5 gap-7">
        <div
          className="flex flex-col w-24 p-2 pr-5 rounded-sm hover:bg-slate-300 "
          onClick={() => redirectto("/about")}
        >
          <img
            src="src\assets\images\html-icon.svg"
            alt="is this not working"
          />
          <h1 className="font-bold text-center">&nbsp;&nbsp;&nbsp;about</h1>
        </div>
        <div
          className="flex flex-col w-24 p-2 pr-5 rounded-sm hover:bg-slate-300"
          onClick={() => redirectto("/projects")}
        >
          <img
            src="src\assets\images\html-icon.svg"
            alt="is this not working"
          />
          <h1 className="font-bold text-center">&nbsp;&nbsp;&nbsp;projects</h1>
        </div>
        <div
          className="flex flex-col w-24 p-2 pr-5 rounded-sm hover:bg-slate-300"
          onClick={() => redirectto("/connect")}
        >
          <img
            src="src\assets\images\html-icon.svg"
            alt="is this not working"
          />
          <h1 className="font-bold text-center">&nbsp;&nbsp;&nbsp;connect</h1>
        </div>
        <div
          className="flex flex-col w-24 p-2 pr-5 rounded-sm hover:bg-slate-300"
          onClick={() =>
            redirectto(
              "https://drive.google.com/file/d/1J3zi1_EQJktHyhd23nxor_GqABLZ9Byi/view?usp=sharing"
            )
          }
        >
          <img src="src\assets\images\pdf (2).png" alt="is this not working" />
          <h1 className="font-bold text-center">&nbsp;&nbsp;&nbsp;resume</h1>
        </div>
      </div>
    </>
  );
}
