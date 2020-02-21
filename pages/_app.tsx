import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "typeface-roboto";
import Layout from "../components/Layout";
import { makeStore } from "../store";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { fromJS } from "immutable";

class MyApp extends App<{ store: any }> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Layout>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRedux(makeStore, {
  serializeState: (state: any) => state.toJS(),
  deserializeState: (state: any) => fromJS(state)
})(MyApp);
