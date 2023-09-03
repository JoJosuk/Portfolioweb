export default function HomeCard() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="w-4/5 p-4 bg-cover h-4/5 rounded-2xl hover:bg-card-img">
          <p className="p-2 text-lg font-bold font-code">
            Software Developer Engineer
          </p>
          <h1 className="p-2 font-sans text-5xl text-white">
            Hey, I&rsquo;m Joel J George
          </h1>
          <p className="p-2 text-xl text-white pt-7 font-code">
            Goal-oriented software developer engineer with a passion for
            creating desktop apps and exploring web technologies
          </p>
        </div>
      </div>
    </>
  );
}
