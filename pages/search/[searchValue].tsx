import { NextPage } from "next";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { fetchResults } from "../../actions/shared";
import { newSearch } from "../../actions/search";
import {
  CircularProgress,
  makeStyles,
  Theme,
  createStyles,
  Typography
} from "@material-ui/core";
import { Fragment, useState } from "react";
import HeroCard from "../../components/HeroCard";
import Paginator from "../../components/Paginator";

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
      maxWidth: 300,
      maxHeight: 300,
      [theme.breakpoints.up("xs")]: {
        margin: 10,
        height: 300,
        width: 300
      },
      [theme.breakpoints.up("sm")]: {
        margin: 10,
        height: 200,
        width: 200
      }
    },
    heroContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  })
);

const SearchPage: NextPage = ({
  search,
  results,
  loading,
  fetchResults,
  newSearch
}: any) => {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const router = useRouter();
  const end = page * 20;
  const start = end - 20;

  const response = results && results.data.response;
  const searchValue = router.query.searchValue;

  if (!loading && !results) {
    if (!search) {
      newSearch(searchValue);
    } else {
      fetchResults();
    }
  }

  if (response === "error") {
    return (
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="h6"
        align="center"
      >
        {results.data.error}
      </Typography>
    );
  }

  if (!results) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  const handleChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <Typography className={classes.typographyRoot} variant="h5">
        <strong>Results for: </strong>
        {results.data["results-for"]}
      </Typography>
      <hr />
      <div className={classes.heroContainer}>
        {results.data.results.slice(start, end).map(data => (
          <HeroCard key={data.id} className={classes.heroCard} hero={data} />
        ))}
      </div>
      <Paginator onChange={handleChange} />
    </Fragment>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  newSearch,
  fetchResults
})(SearchPage);
