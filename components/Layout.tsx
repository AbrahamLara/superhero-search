import {
  AppBar,
  Container,
  Paper,
  Toolbar,
  Typography
} from "@material-ui/core";

export default function Layout(props: any) {
  return (
    <div>
      <AppBar position="static">
        <Paper square>
          <Toolbar>
            <Typography variant="h6">Superhero Search</Typography>
          </Toolbar>
        </Paper>
      </AppBar>
      <Container>{props.children}</Container>
    </div>
  );
}
