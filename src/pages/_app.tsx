import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify, Storage } from "aws-amplify";
import awsConfig from "@/aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({ ...awsConfig, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
