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
import { clearMessage, setMessage } from "../actions/msg";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AlertAction(props) {
  return (
    <IconButton {...props}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );
}
class MyApp extends App<{ store: any }> {
  unsubscribe: Function = null;
  state = {
    msg: ""
  };

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

    this.unsubscribe = this.props.store.subscribe(this.handleChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange = () => {
    const { store } = this.props;
    let previousValue = this.state.msg;
    let currentMsg = store.getState().msg;

    if (previousValue !== currentMsg) {
      this.setState({ msg: currentMsg });
    }
  };

  handleClose = (_, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    this.props.store.dispatch(clearMessage());
  };

  render() {
    const { Component, pageProps, store } = this.props;
    const msg = this.state.msg;
    const open = Boolean(msg);

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
              >
                <Alert
                  severity="error"
                  action={
                    <AlertAction
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={this.handleClose}
                    />
                  }
                >
                  {msg}
                </Alert>
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
