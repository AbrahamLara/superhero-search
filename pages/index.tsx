import { NextPage } from "next";
import { Typography, makeStyles, createStyles } from "@material-ui/core";

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
        Welcome to Superhero search!
      </Typography>
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="body1"
        align="center"
      >
        Type the name of a comic book character to fetch infomation on them.
      </Typography>
    </div>
  );
};

export default Home;
