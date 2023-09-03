/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/Filemanager_wallpaper.jpg')",
        "card-img":
          "url('https://s3-alpha-sig.figma.com/img/15df/1147/14462531c9153a41e7b32bba1071f225?Expires=1694390400&Signature=KIqWrPi2DL596vwvDodlQklH39U3LcOnXx9Z5cweR~z508~Q8vm1dpSDuqoW0kE56cprdeDY7s2X3I6uqq3hrU5hrp9fDuSHHluLPyy8ggS5UYwI7n5~9rs-mY9aa-00VIb5Z8npbEgfsoVM30cteljZ0TaMWChNZkFqWk~ZbbN4nNxzKEH2HGG4JIgIKSS5XLEK0gG1UFVmgCwxTSvk-DKSWCCahp1aDdQkH5bsFhU-5ZGzPN9d8D28KKIk85OTylCk5c-YOF-QsOlciYdj7Jz4hpqneX8PU5rbgJw~V1a63lecQOmoBt72TNva5g7JbxhFVcAiIDFW1lH4TZ0B6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
      },
      fontFamily: {
        sans: ["Fira Sans"],
        code: ["Fira Code"],
        space: ["Nunito"],
      },
      lineHeight: {
        "extra-loose": "4",
        12: "4rem",
      },
      textUnderlineOffset: {
        12: "12px",
      },
    },
  },
  plugins: [],
};
