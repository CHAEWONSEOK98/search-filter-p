# React - Redux - Search - Filter - p

vite에서 tailwindCSS 사용할 때 추가적으로 설치할 것.

- npm i postcss@latest
- npm i autoprefixer@latest
- postcss.config.cjs

  module.exports = {
  plugins: {
  tailwindcss: {},
  autoprefixer: {},
  }
  }

<hr />
vite에서 .env 환경변수를 사용할 때

VITE\_ 으로 시작.
VITE_API_KEY = 9a028c51c230bc1e4d4d8ae6e7c6a458

환경변수 불러올 때.
const { VITE_API_KEY } = import.meta.env;

<hr />
