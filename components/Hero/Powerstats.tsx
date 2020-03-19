import { Fragment } from "react";
import { Typography, Divider, LinearProgress } from "@material-ui/core";

export default function Powerstats({ powerstats }: any) {
  return (
    <Fragment>
      <Typography variant="h4">
        <p>Powerstats:</p>
      </Typography>
      <Divider />
      <Typography variant="h6">
        Intellegence:
        <LinearProgress
          value={Number(powerstats.intelligence)}
          variant="determinate"
        />
      </Typography>
    </Fragment>
  );
}
