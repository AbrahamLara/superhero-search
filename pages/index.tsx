import { NextPage } from "next";
import { connect } from "react-redux";
import { fetchResults } from "../actions/shared";
import { Fragment } from "react";
import {
  Typography,
  CircularProgress,
  makeStyles,
  createStyles
} from "@material-ui/core";
import HeroCard from "../components/HeroCard";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px"
    },
    typographyRoot: {
      marginTop: "15px"
    }
  })
);

const Home: NextPage = ({ search, results, fetchResults }: any) => {
  const data = results.data;
  const classes = useStyles();

  if (search) fetchResults();

  if (data && data.data.response === "error") {
    return (
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="h6"
        align="center"
      >
        {data.data.error}
      </Typography>
    );
  }

  if (results.loading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {data ? (
        <Fragment>
          <Typography variant="h5">
            {`Results for: ${data.data["results-for"]}`}
          </Typography>
          <div>
            {data.data.results.map(data => (
              <HeroCard key={data.id} hero={data} />
            ))}
          </div>
        </Fragment>
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  fetchResults
})(Home);
