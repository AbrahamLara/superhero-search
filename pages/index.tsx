import { NextPage } from "next";
import { connect } from "react-redux";
import { fetchResults } from "../actions/shared";
import { Fragment } from "react";
import { Typography } from "@material-ui/core";

const Home: NextPage = ({ search, results, fetchResults }: any) => {
  if (search) {
    fetchResults();
  }

  return (
    <div>
      {results.data ? (
        <Fragment>
          <Typography variant="h5">
            {`Results for: ${results.data.data["results-for"]}`}
          </Typography>
          {JSON.stringify(results.data.data.results)}
        </Fragment>
      ) : (
        <Typography>
          There are currently not results to display! Type a superhero name in
          the search bar!
        </Typography>
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
