function redirectto() {
  window.location.href = "/";
}
function redirecttostr(str) {
  window.location.href = str;
}
export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen pr-1 text-white p-7 bg-stone-900 font-space">
        <div className="absolute pt-2 pl-20 text-amber-500">
          <p className="text-xl font-code ">
            Joel J George <br /> SDE
          </p>
        </div>
        <nav className="flex justify-center ">
          <ul className="flex items-center justify-between gap-8 text-lg">
            <li className="hover:scale-110 text-amber-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:scale-110 hover:text-amber-500">
              <a href="/about">About</a>
            </li>
            <li className="hover:scale-110 hover:text-amber-500">
              <a href="/projects">Projects</a>
            </li>
            <li className="hover:scale-110 hover:text-amber-500">
              <a href="/connect">Connect</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-center w-4/5 text-4xl font-light pt-44 leading-12">
          <p className="pl-20 text-5xl font-medium">
            Hello, I am a{" "}
            <span className="text-amber-500">Software Developer Engineer</span>,
            delving into the realms of desktop and web technologies.
          </p>
          <div className="pl-20">
            <div className="flex flex-row gap-4 w-28">
              <svg
                onClick={() =>
                  redirecttostr("https://twitter.com/joelgeorge28635")
                }
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                x="0"
                y="0"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#fff"
                  strokeMiterlimit="10"
                  d="M42 12.429a14.978 14.978 0 01-4.247 1.162 7.38 7.38 0 003.251-4.058 14.829 14.829 0 01-4.693 1.776A7.377 7.377 0 0030.926 9c-4.08 0-7.387 3.278-7.387 7.32 0 .572.067 1.129.193 1.67a21.05 21.05 0 01-15.224-7.654 7.23 7.23 0 00-1 3.686c0 2.541 1.301 4.778 3.285 6.096a7.52 7.52 0 01-3.349-.914v.086c0 3.551 2.547 6.508 5.923 7.181a7.346 7.346 0 01-1.941.263c-.477 0-.942-.054-1.392-.135.94 2.902 3.667 5.023 6.898 5.086a14.925 14.925 0 01-9.174 3.134 14.61 14.61 0 01-1.761-.104A21.109 21.109 0 0017.321 38c13.585 0 21.017-11.156 21.017-20.834 0-.317-.01-.633-.025-.945A14.532 14.532 0 0042 12.429"
                  fontFamily="none"
                  fontSize="none"
                  fontWeight="none"
                  textAnchor="none"
                  transform="scale(5.33333)"
                ></path>
              </svg>
              <svg
                onClick={() => redirecttostr("https://github.com/JoJosuk")}
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                x="0"
                y="0"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#fff"
                  strokeMiterlimit="10"
                  d="M25 2C12.311 2 2 12.311 2 25s10.311 23 23 23 23-10.311 23-23S37.689 2 25 2zm0 2c11.607 0 21 9.393 21 21 0 .071-.005.142-.006.213a39.762 39.762 0 00-2.318-.149 59.321 59.321 0 00-4.903.061c.07-.49.12-.988.122-1.498.096-1.873-.532-3.625-1.555-5.172.247-.854.537-1.94.61-3.172.082-1.404-.04-2.961-1.167-4.013l-.289-.27H36.1c-2.683 0-4.52 1.123-5.643 2.014A15.026 15.026 0 0025 12a15.82 15.82 0 00-5.553 1.018C18.325 12.127 16.487 11 13.801 11h-.393l-.289.268c-1.098 1.02-1.2 2.534-1.13 3.931.06 1.233.333 2.353.575 3.248-1.04 1.578-1.664 3.375-1.664 5.153 0 .511.048 1.01.118 1.502-1.806-.084-3.416-.1-4.694-.055-.94.033-1.679.089-2.318.148 0-.065-.006-.13-.006-.195C4 13.393 13.393 4 25 4zm-10.604 9.13c2.018.192 3.536 1.093 4.239 1.718l.469.414.578-.237C21.263 14.375 23.027 14 25 14c1.973 0 3.737.376 5.2 1.016l.585.257.479-.425c.703-.625 2.223-1.526 4.242-1.717.268.445.502 1.078.445 2.035-.067 1.146-.374 2.394-.605 3.135l-.15.482.298.408c.99 1.35 1.494 2.81 1.408 4.354l-.002.027v.028c0 2.495-.898 4.492-2.812 5.972C32.174 31.052 29.153 32 24.9 32c-4.252 0-7.275-.948-9.189-2.428-1.914-1.48-2.81-3.477-2.81-5.972 0-1.465.528-3.076 1.505-4.409l.293-.398-.14-.475c-.232-.788-.516-2.064-.573-3.216-.047-.96.18-1.565.41-1.971zM8.885 26.022a65.21 65.21 0 012.328.088c.077.312.166.619.273.918-3.307.07-5.781.403-7.306.688-.065-.5-.116-1.005-.145-1.516a44.842 44.842 0 014.85-.178zm32.23.016a44.94 44.94 0 014.848.178c-.029.503-.08 1-.143 1.494-1.58-.29-4.12-.622-7.513-.676.105-.293.193-.595.27-.9a64.184 64.184 0 012.538-.096zM11.912 28.02a9.029 9.029 0 002.576 3.134c1.54 1.192 3.544 2.024 5.989 2.469-.32.329-.611.69-.87 1.07l-.06-.052c.005-.007-.497.245-1.248.312S16.622 35 15.8 35c-1.225 0-1.765-.579-2.627-1.633a7.098 7.098 0 00-1.625-1.56c-.579-.406-1.073-.691-1.684-.793L9.783 31H9.7c-.466 0-.918.034-1.34.516-.21.24-.356.687-.261 1.064.094.378.333.61.547.752 1.366.911 1.608 2.715 2.464 4.318.8 1.594 2.527 2.35 4.291 2.35H18v4.803c-7.032-2.482-12.335-8.598-13.668-16.1 1.53-.288 4.095-.635 7.58-.683zm25.97.007c3.564.03 6.2.377 7.788.67C44.339 36.202 39.034 42.32 32 44.803V39.6c0-1.585-.52-3.332-1.426-4.79a7.52 7.52 0 00-.959-1.236c2.315-.457 4.217-1.275 5.698-2.42a9.004 9.004 0 002.57-3.127zM23.7 34.1H26.5c.813 0 1.68.647 2.375 1.765C29.57 36.983 30 38.485 30 39.6v5.798a21.078 21.078 0 01-10 0V39.6c0-1.091.468-2.589 1.209-3.711.741-1.123 1.677-1.79 2.49-1.79zM12.31 35.28C13.174 36.18 14.223 37 15.8 37c.779 0 1.751.028 2.676-.055l.01-.002c-.122.35-.213.703-.29 1.057H15.4c-1.233 0-2.104-.446-2.505-1.248l-.008-.014-.006-.011c-.165-.306-.38-.916-.572-1.446z"
                  fontFamily="none"
                  fontSize="none"
                  fontWeight="none"
                  textAnchor="none"
                  transform="scale(5.12)"
                ></path>
              </svg>
              <svg
                onClick={() =>
                  redirecttostr("https://www.linkedin.com/in/joeljgeorge/")
                }
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                x="0"
                y="0"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#fff"
                  strokeMiterlimit="10"
                  d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26z"
                  fontFamily="none"
                  fontSize="none"
                  fontWeight="none"
                  textAnchor="none"
                  transform="scale(5.12)"
                ></path>
              </svg>
            </div>
            <p className="p-0 text-lg">joeljoby111@gmail.com </p>
            <p className="p-0 text-lg">+91 9995017479</p>
          </div>
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
