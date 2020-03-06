import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    pagination: {
      margin: "auto",
      width: "fit-content"
    }
  })
);

const Paginator = ({ size, onChange, page }: any) => {
  const classes = useStyles();
  const remainder = size % 10;
  let count = Math.floor(size - remainder) / 10;

  if (remainder) {
    count += 1;
  }

  return (
    <Pagination
      className={classes.pagination}
      count={count}
      variant="outlined"
      color="primary"
      size="large"
      page={page}
      onChange={(_: any, page: number) => onChange(page)}
    />
  );
};

function mapStateToProps({ results }: any) {
  return {
    size: results.data.data.results.length
  };
}

export default connect(mapStateToProps)(Paginator);
