import { NextPage } from "next";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { fetchPayload } from "../../actions/shared";
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

const SearchPage: NextPage = ({ payload, loading, fetchPayload }: any) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const router = useRouter();
  const end = page * 20;
  const start = end - 20;

  const searchValue = router.query.searchValue;

  if (!loading && !payload) {
    fetchPayload(searchValue);
  }

  if (loading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  if (!payload || payload.error || payload.msg) {
    return (
      <Typography
        classes={{ root: classes.typographyRoot }}
        variant="h6"
        align="center"
      >
        No results to display.
      </Typography>
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
        {payload["results-for"]}
      </Typography>
      <hr />
      <div className={classes.heroContainer}>
        {payload.results.slice(start, end).map(data => (
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
  fetchPayload
})(SearchPage);
