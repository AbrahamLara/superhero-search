import {
  AppBar,
  Container,
  Paper,
  Toolbar,
  Typography,
  Theme,
  makeStyles,
  createStyles,
  Link
} from "@material-ui/core";
import SearchBar from "./SearchBar";
import NextLink from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarRoot: {
      [theme.breakpoints.down("xs")]: {
        display: "block"
      }
    },
    linkRoot: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "none"
      }
    },
    linkDecRoot: {
      cursor: "pointer",
      marginLeft: 20
    },
    searchContainer: {
      marginLeft: "auto",
      [theme.breakpoints.down("xs")]: {
        display: "block",
        marginLeft: -16,
        marginRight: -16
      }
    },
    links: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        justifyContent: "space-between",
        padding: theme.spacing(1, 0, 1, 0)
      }
    }
  })
);

export default function Layout(props: any) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Paper square>
          <Toolbar classes={{ root: classes.toolbarRoot }}>
            <div className={classes.links}>
              <NextLink href="/">
                <Link classes={{ root: classes.linkRoot }} color="inherit">
                  <Typography variant="h6" component="div">
                    SuperheroSearch
                  </Typography>
                </Link>
              </NextLink>
              <Link
                href="https://github.com/AbrahamLara/superhero-search"
                classes={{ root: classes.linkDecRoot }}
                color="inherit"
              >
                <Typography>About</Typography>
              </Link>
            </div>
            <div className={classes.searchContainer}>
              <SearchBar />
            </div>
          </Toolbar>
        </Paper>
      </AppBar>
      <Container>{props.children}</Container>
    </div>
  );
}
