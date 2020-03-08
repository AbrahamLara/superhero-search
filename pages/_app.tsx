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
import { Snackbar, IconButton, Button } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import { clearMessage } from "../actions/msg";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class MyApp extends App<{ store: any }> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  handleClose = (_, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    this.props.store.dispatch(clearMessage());
  };

  render() {
    const { Component, pageProps, store } = this.props;

    const open = store.msg;

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
          <Provider store={store}>
            <Layout>
              <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                action={
                  <React.Fragment>
                    <Button
                      color="secondary"
                      size="small"
                      onClick={this.handleClose}
                    >
                      UNDO
                    </Button>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={this.handleClose}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
              >
                <Alert severity="error">This is an error message!</Alert>
              </Snackbar>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRedux(makeStore)(MyApp);
