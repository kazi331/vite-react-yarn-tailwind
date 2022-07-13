## react-vite-yarn-tailwindcss

follow the instructions to install tailwindcss in vite-react with yarn
```
yarn add tailwindcss autoprefixer postcss --dev
yarn tailwind init -p
```
Then copy and past the following lines into the `index.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Then replace `content: [],` with `content: ["./src/**/*.{html,js,jsx,ts,tsx}"],` in tailwind.config.js(cjs) file

Then `restart` the IDE and start server