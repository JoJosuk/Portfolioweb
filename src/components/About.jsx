function redirectto() {
  window.location.href = "/";
}
export default function About() {
  return (
    <>
      <div className="w-full pl-20 pr-1 text-white md:pl-5 p-7 min-h-screen bg-stone-900 font-space">
        <p className="text-lg text-amber-500">Hey About Me,</p>
        <div className="w-3/4 pt-5 text-4xl font-light md:w-full md:text-2xl md:leading-8 leading-12 ">
          <p className="py-2">
            Hey there, I&rsquo;m Joel J George. I&rsquo;m a final year Data
            Science student with a passion for exploring the ever-evolving world
            of technology and programming. I&rsquo;m on a journey to harness the
            capabilities of programming languages to tackle intricate
            challenges.
          </p>
          <p className="pt-12">
            I am passionate about building web applications that are both useful
            and visually appealing. I have been building web apps for around 2
            years, and I am always looking for new ways to improve my skills and
            create more innovative apps. I am excited to continue learning and
            growing as a web developer, and I am eager to share my work with the
            world.
          </p>
          <p className="pt-12 pb-10">
            Beyond coding pursuits, I relish quality moments with family, enjoy
            bike rides, and indulge in shows. I also appreciate quick getaways
            with friends and escaping into the world of books.
          </p>
        </div>
        <div
          onClick={() => redirectto()}
          className="fixed bottom-0 right-0 pb-3 pr-3"
        >
          <div
            className="flex items-center justify-center w-20 h-20 text-lg font-semibold text-black ease-linear origin-center rotate-45 rounded-full cursor-pointer hover:rotate-0 hover:scale-110 hover:bg-amber-600 bg-amber-500 font-code"
            style={{ right: 0 }}
          >
            Home
          </div>
        </div>
      </div>
    </>
  );
}
