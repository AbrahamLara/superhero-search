import SearchIcon from "@material-ui/icons/Search";
import {
  makeStyles,
  createStyles,
  Theme,
  fade,
  InputBase
} from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { newSearch, clearSearch } from "../actions/search";
import { useRouter } from "next/router";

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

const SearchBar = props => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const inputRef: any = React.createRef();
  const router = useRouter();

  const handleChange = (e: any) => setSearch(e.target.value);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    inputRef.current.blur();
    props.newSearch(search);
    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputRef={inputRef}
          value={search}
          onChange={handleChange}
          placeholder="Superhero..."
          inputProps={{ "aria-label": "search" }}
        />
      </form>
    </div>
  );
};

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps, {
  clearSearch,
  newSearch
})(SearchBar);
