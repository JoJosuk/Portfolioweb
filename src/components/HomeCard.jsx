export default function HomeCard() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="w-4/5 p-4 bg-cover group bg-slate-950 bg-radial-gradient h-4/5 rounded-2xl hover:bg-gradient-to-tr from-blue-500 via-rose-300 to-orange-500">
          <p className="p-2 text-lg font-bold text-white font-code group-hover:text-black">
            Software Developer Engineer
          </p>
          <h1 className="p-2 font-sans text-5xl text-transparent group-hover:text-white bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text">
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
