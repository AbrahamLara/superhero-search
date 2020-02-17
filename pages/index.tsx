import { NextPage } from "next";
import useSWR from "swr";
import {
  InputBase,
  makeStyles,
  createStyles,
  Theme,
  fade
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      display: "flex",
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      maxWidth: "400px",
      margin: "auto"
    },
    searchIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px"
    },
    searchInput: {
      flex: 1,
      padding: theme.spacing(1, 1, 1, 0)
    }
  })
);

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          classes={{ root: classes.searchInput }}
          placeholder="Superhero..."
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
};

export default Home;
