import NextLink from "next/link";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  makeStyles,
  createStyles
} from "@material-ui/core";
import classnames from "classnames";
import { useState } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    cardAction: {
      maxWidth: "inherit",
      maxHeight: "inherit",
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
      maxWidth: "inherit",
      maxHeight: "inherit"
    },
    defaultMedia: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      verticalAlign: "center",
      fontSize: "1.5em"
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
      <NextLink href={`/hero/${hero.id}`}>
        <CardActionArea classes={{ root: classes.cardAction }}>
          {!error ? (
            <CardMedia
              classes={{ media: classes.cardMedia }}
              component="img"
              alt={hero.name}
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
      </NextLink>
    </Card>
  );
};

export default HeroCard;
