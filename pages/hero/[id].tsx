import { NextPage, NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import {
  makeStyles,
  createStyles,
  Card,
  CardHeader,
  Typography,
  Divider,
  Box
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
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
      flex: 1
    }
  })
);

const Hero: NextPage = (props: any) => {
  const data = props.data;
  const classes = useStyles();

  return (
    <Box display="flex" flexWrap="wrap">
      <aside style={{ width: "500px" }}>
        <Card className={classes.card}>
          <CardHeader
            title={data.name}
            classes={{ title: classes.cardHeaderTitle }}
          />
          <img
            className={classes.poster}
            src={data.image.url}
            alt={data.name}
          />
        </Card>
      </aside>
      <div className={classes.heroInfo}>
        <Typography variant="h4">
          <p>Powerstats:</p>
        </Typography>
        <Divider />
        <label></label>
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
