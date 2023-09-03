export default function Projects() {
  return (
    <>
      <div className="w-full h-screen pr-1 text-white p-7 bg-stone-900 font-space">
        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/SpinRent"
            className="underline underline-offset-12"
          >
            Spinrent
          </a>
          <p className="pt-5 text-2xl leading-10">
            Web application to rent vehicles, making it easy and convenient for
            users to find and book the perfect vehicle for their needs.
          </p>

          <div className="flex w-1/2">
            <img src="src\assets\images\react-icons.svg" alt="idk how" />
          </div>
        </div>
      </div>
    </>
  );
}
