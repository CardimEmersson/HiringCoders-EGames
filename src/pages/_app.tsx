import type { AppProps } from "next/app";
import { Provider } from "contextApi";
import { Global } from "styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Global />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
