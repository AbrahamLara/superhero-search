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

const SearchPage: NextPage = ({
  search,
  results,
  fetchResults,
  newSearch
}: any) => {
  const classes = useStyles();
  const router = useRouter();
  const data = results.data;
  const searchValue = router.query.searchValue;
  const page = Number(router.query.page);
  const end = page * 10;
  const start = end - 10;

  if (!results.loading && !data) {
    if (!search) {
      newSearch(searchValue);
    } else {
      fetchResults();
    }
  }

  if (!data) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Fragment>
      <Typography variant="h5">
        <strong>Results for: </strong>
        {data.data["results-for"]}
      </Typography>
      <hr />
      <div className={classes.heroContainer}>
        {data.data.results.slice(start, end).map(data => (
          <HeroCard key={data.id} className={classes.heroCard} hero={data} />
        ))}
      </div>
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
