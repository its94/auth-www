import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";


const theme = extendTheme({
  config: {
    intialColorMode: "dark",
    useSystemColorMode: true,
  },
});

console.log(process.env)
const appId = process.env.REACT_APP_MORALIS_ID;
const serverUrl = process.env.REACT_APP_SERVER_URL;
// const appId = "gK5aTfHzQR1nR6nrS5lO9evI6Byx6kpfnvJ8W9Hi";
// const serverUrl = "https://2srttozxlrdh.bigmoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
