import { NextPage } from "next";
import { connect } from "react-redux";
import { fetchResults } from "../actions/shared";
import { Fragment, useState } from "react";
import {
  Typography,
  CircularProgress,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import HeroCard from "../components/HeroCard";
import Paginator from "../components/Paginator";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      marginTop: 20
    },
    typographyRoot: {
      marginTop: 15
    },
    heroCard: {
      marginBottom: 15,
      [theme.breakpoints.up("sm")]: {
        margin: 10
      }
    },
    heroContainer: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }
    }
  })
);

const Home: NextPage = ({ search, results, fetchResults }: any) => {
  const classes = useStyles();
  const [state, setState] = useState({ start: 0, end: 10 });
  const { start, end } = state;
  const data = results.data;
  const response = data && data.data.response;
  const router = useRouter();

  if (search) fetchResults();

  if (data && response === "error") {
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
    // return (
    //   <div className={classes.root}>
    //     <CircularProgress />
    //   </div>
    // );
  }
  console.log(router.query);

  // if (data && response === "success" && !router.query.page) {
  // router.push('/?page=1');
  // }

  const handleChange = (page: number) => {
    const end = page * 10;
    const start = end - 10;

    setState({
      ...state,
      start,
      end
    });
  };

  return (
    <div>
      {data ? (
        <Fragment>
          <Typography variant="h5">
            <strong>Results for: </strong>
            {data.data["results-for"]}
          </Typography>
          <hr />
          <div className={classes.heroContainer}>
            {data.data.results.slice(start, end).map(data => (
              <HeroCard
                key={data.id}
                className={classes.heroCard}
                hero={data}
              />
            ))}
          </div>
          <Paginator onChange={handleChange} />
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

Home.getInitialProps = async ({ req }: any) => {
  return { query: req.query };
};

export default connect(mapStateToProps, {
  fetchResults
})(Home);
