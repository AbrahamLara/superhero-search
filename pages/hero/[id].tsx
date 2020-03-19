import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import {
  makeStyles,
  createStyles,
  Card,
  CardHeader,
  Typography,
  Divider,
  Box,
  LinearProgress,
  Theme
} from "@material-ui/core";
import { Fragment } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      marginTop: "20px"
    },
    aside: {
      width: "100%",
      position: "relative",
      [theme.breakpoints.up("sm")]: {
        width: "50%"
      }
    },
    card: {
      width: "fit-content",
      margin: "auto",
      [theme.breakpoints.up("sm")]: {
        width: "90%"
      }
    },
    cardHeaderTitle: {
      fontSize: "22pt",
      textAlign: "center"
    },
    poster: {
      display: "block",
      margin: "auto",
      width: "100%"
    },
    heroInfo: {
      flex: 1,
      "& > div:not(:last-child)": {
        marginBottom: "20px"
      }
    }
  })
);

const Hero: NextPage = (props: any) => {
  const {
    name,
    powerstats,
    biography,
    appearance,
    work,
    connections,
    image,
    msg,
    error
  } = props.data;
  const classes = useStyles();

  if (msg || error) {
    return <div>{msg || error}</div>;
  }

  return (
    <Box className={classes.box} display="flex" flexWrap="wrap">
      <aside className={classes.aside}>
        <Card className={classes.card}>
          <CardHeader
            title={name}
            classes={{ title: classes.cardHeaderTitle }}
          />
          <img className={classes.poster} src={image.url} alt={name} />
        </Card>
      </aside>
      <div className={classes.heroInfo}>
        <div>
          <Typography variant="h4">Powerstats:</Typography>
          <Divider />
          {Object.keys(powerstats).map((key: string) => (
            <Fragment key={key}>
              <Typography variant="subtitle1">
                <strong>{key}:</strong>
              </Typography>
              <LinearProgress
                value={Number(powerstats[key])}
                variant="determinate"
              />
            </Fragment>
          ))}
        </div>
        <div>
          <Typography variant="h4">Biography:</Typography>
          <Divider />
          {Object.keys(biography).map((key: string) => {
            let text = biography[key];

            if (key === "aliases") {
              text = text.join(", ");
            }

            return (
              <Typography key={key} variant="subtitle1">
                <strong>{key}:</strong> {text}
              </Typography>
            );
          })}
        </div>
        <div>
          <Typography variant="h4">Appearance:</Typography>
          <Divider />
          {Object.keys(appearance).map((key: string) => {
            let text = appearance[key];

            if (typeof text === "object") {
              text = text.join("/");
            }

            return (
              <Typography key={key} variant="subtitle1">
                <strong>{key}:</strong> {text}
              </Typography>
            );
          })}
        </div>
        <div>
          <Typography variant="h4">Work:</Typography>
          <Divider />
          {Object.keys(work).map((key: string) => (
            <Typography key={key} variant="subtitle1">
              <strong>{key}:</strong> {work[key]}
            </Typography>
          ))}
        </div>
        <div>
          <Typography variant="h4">Connections:</Typography>
          <Divider />
          {Object.keys(connections).map((key: string) => (
            <Typography key={key} variant="subtitle1">
              <strong>{key}:</strong> {connections[key]}
            </Typography>
          ))}
        </div>
      </div>
    </Box>
  );
};

Hero.getInitialProps = async (ctx: NextPageContext) => {
  const id = ctx.query.id;

  const res = await fetch(`http://${ctx.req.headers.host}/api/id/${id}`);
  const data = await res.json();

  return { data };
};

export default Hero;
