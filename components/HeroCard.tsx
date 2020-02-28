import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";
import classnames from "classnames";

const useStyles = makeStyles({
  cardAction: {
    position: "relative"
  },
  cardContent: {
    padding: 0
  },
  typography: {
    position: "absolute",
    top: 10,
    left: 20,
    fontWeight: "bolder",
    fontSize: "18pt"
  }
});

const HeroCard = ({ hero, className }: any) => {
  const classes = useStyles();

  return (
    <Card className={classnames(className)}>
      <CardActionArea className={classes.cardAction}>
        <CardMedia
          component="img"
          alt={hero.name}
          height="300"
          image={hero.image.url}
          title={hero.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.typography}>{hero.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HeroCard;
