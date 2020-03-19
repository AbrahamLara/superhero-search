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
  LinearProgress
} from "@material-ui/core";
import { Fragment } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      marginTop: "20px"
    },
    card: {
      width: "fit-content",
      margin: "auto"
    },
    cardHeaderTitle: {
      fontSize: "22pt",
      textAlign: "center"
    },
    poster: {
      display: "block",
      margin: "auto"
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
    image
  } = props.data;
  const classes = useStyles();

  return (
    <Box className={classes.box} display="flex" flexWrap="wrap">
      <aside style={{ width: "500px" }}>
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

  const res = await fetch(`http://localhost:3000/api/id/${id}`);
  const data = await res.json();

  return { data };
};

export default Hero;
