import "@/styles/globals.css";
import PortfolioProvider from "@/contexts/PortfolioContext";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}
