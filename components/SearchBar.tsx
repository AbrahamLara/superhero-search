import SearchIcon from "@material-ui/icons/Search";
import {
  makeStyles,
  createStyles,
  Theme,
  fade,
  InputBase
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      display: "flex",
      position: "relative",
      overflow: "hidden",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      [theme.breakpoints.down("xs")]: {
        borderRadius: 0
      }
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      padding: theme.spacing(1.5, 1, 1.5, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(1, 1, 1, 7)
      }
    },
    searchIcon: {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      width: theme.spacing(7),
      position: "absolute"
    }
  })
);

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        placeholder="Superhero..."
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default SearchBar;
