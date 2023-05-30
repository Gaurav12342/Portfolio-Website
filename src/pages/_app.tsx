import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { memo } from "react";
import "tailwindcss/tailwind.css";

const App = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
});

export default App;
