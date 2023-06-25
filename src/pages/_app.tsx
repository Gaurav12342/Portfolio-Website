import "@/styles/globals.css";
import { memo } from "react";
import "tailwindcss/tailwind.css";

const App = memo(({ Component, pageProps }: any): JSX.Element => {
  return <Component {...pageProps} />;
});

export default App;
