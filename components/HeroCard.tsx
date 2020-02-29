import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import classnames from "classnames";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardAction: {
      position: "relative",
      height: "100%"
    },
    typography: {
      position: "absolute",
      top: 10,
      left: 20,
      fontWeight: "bolder",
      fontSize: "18pt"
    },
    cardMedia: {
      [theme.breakpoints.up("sm")]: {
        maxWidth: 300
      }
    },
    defaultMedia: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "center",
      height: 300,
      fontSize: "1.5em",
      [theme.breakpoints.up("sm")]: {
        width: 300
      }
    },
    defaultText: {
      width: 100,
      textAlign: "center"
    }
  })
);

const HeroCard = ({ hero, className }: any) => {
  const classes = useStyles();
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(!error);
  };

  return (
    <Card className={classnames(className)}>
      <CardActionArea classes={{ root: classes.cardAction }}>
        {!error ? (
          <CardMedia
            classes={{ media: classes.cardMedia }}
            component="img"
            alt={hero.name}
            height="300"
            image={hero.image.url}
            title={hero.name}
            onError={handleError}
          />
        ) : (
          <div className={classes.defaultMedia}>
            <strong className={classes.defaultText}>Image Unavailable</strong>
          </div>
        )}
        <Typography className={classes.typography}>{hero.name}</Typography>
      </CardActionArea>
    </Card>
  );
};

export default HeroCard;
