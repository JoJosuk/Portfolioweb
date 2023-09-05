function redirectto() {
  window.location.href = "/";
}
export default function Connect() {
  return (
    <>
      <div className="w-full min-h-screen pr-1 text-white p-7 bg-stone-900 font-space">
        <p className="pt-5 text-lg text-amber-500">Hey Connect with me ,</p>
        <div className="w-3/4 pt-4 text-4xl font-light md:w-full md:text-2xl leading-12 md:pb-20 ">
          <h1 className="">
            If you&rsquo;re interested in collaboration, have questions, or
            simply want to chat, feel free to reach out to me through various
            channels. You can connect with me on &nbsp;
            <a
              href="https://www.linkedin.com/in/joeljgeorge/"
              className="underline underline-offset-8 text-amber-500"
            >
              linkedin&nbsp;
            </a>
            for professional networking, drop me an{" "}
            <a
              href="mailto:joeljoby111@gmail.com"
              className="underline underline-offset-8 text-amber-500"
            >
              email
            </a>{" "}
            for direct communication, explore my code on{" "}
            <a
              href="https://github.com/JoJosuk"
              className="underline underline-offset-8 text-amber-500"
            >
              GitHub
            </a>
            , or catch up on my occasional thoughts and recommendations on{" "}
            <a
              href="https://twitter.com/joelgeorge28635"
              className="underline underline-offset-8 text-amber-500"
            >
              Twitter
            </a>
            . While my{" "}
            <a
              href="https://www.instagram.com/joel_j_george/"
              className="underline underline-offset-8 text-amber-500"
            >
              Instagram
            </a>{" "}
            page is currently set to private for personal moments, I&rsquo;m
            always open to new connections and conversations. Looking forward to
            connecting with you!
          </h1>
        </div>
        <div
          onClick={() => redirectto()}
          className="fixed bottom-0 right-0 pb-3 pr-3 cursor-pointer"
        >
          <div
            className="flex items-center justify-center w-20 h-20 text-lg font-semibold text-black ease-linear origin-center rotate-45 rounded-full hover:rotate-0 hover:scale-110 hover:bg-amber-600 bg-amber-500 font-code"
            style={{ right: 0 }}
          >
            Home
          </div>
        </div>
      </div>
    </>
  );
}
