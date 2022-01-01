import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../@components/misc/Layout";
import "../styles/globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    colors: {
      agray: {
        100: "#444444",
        200: "#676767",
        300: "#4b4b4b",
        400: "#666666",
        500: "#939393",
        600: "#d3ecff",
        700: "#888;"

      },
      textColor: {
        100: "#2E2C4F"
      },
      ared: {
        100: "#cd1337",
      },
      bcolor: {
        100: "#d2d2d7",
      },

      bgcolor: {
        100: "#f5f5f7",
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Layout footer={pageProps?.footer?.attributes} navbar={pageProps?.navbar?.attributes} >
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}



export default MyApp;
