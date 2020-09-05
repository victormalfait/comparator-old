import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function ProductCart(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/img/product/evian1L.jpeg"
            title={props.product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              test
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            See product
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
