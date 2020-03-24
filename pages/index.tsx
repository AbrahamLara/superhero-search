import { NextPage } from "next";
import {
  Typography,
  makeStyles,
  createStyles,
  Link,
  List,
  ListItem
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    typographyRoot: {
      marginTop: 15
    }
  })
);

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="h4"
        align="center"
      >
        Welcome to SuperheroSearch!
      </Typography>
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="body1"
        align="center"
      >
        You can use the search bar at the top right to search for a superhero or
        villan.
      </Typography>
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="body1"
        align="center"
      >
        Not all comic book characters will be searchable on this web app and
      </Typography>
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="body1"
        align="center"
      >
        the characters and information about them don't come from me but from
        the{" "}
        <Link href="https://superheroapi.com/index.html">SuperHero API</Link>.
      </Typography>
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="body1"
        align="center"
      >
        Visit the about link if you want to learn more about the tools used to
        build this web app
      </Typography>
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="body1"
        align="center"
      >
        and how it was written.
      </Typography>
    </div>
  );
};

export default Home;
