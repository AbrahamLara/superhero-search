import {
  AppBar,
  Container,
  Paper,
  Toolbar,
  Typography,
  Theme,
  makeStyles,
  createStyles,
  IconButton
} from "@material-ui/core";
import SearchBar from "./Searchbar";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none"
      },
      marginRight: theme.spacing(2)
    },
    title: {
      display: "block"
    }
  })
);

export default function Layout(props: any) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Paper square>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              Superhero Search
            </Typography>
            <SearchBar />
          </Toolbar>
        </Paper>
      </AppBar>
      <Container>{props.children}</Container>
    </div>
  );
}
