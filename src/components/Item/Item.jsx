import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
  } from "@mui/material";
  
  const Item = (props) => {
    return (
      <Card sx={{ width: 250, m: 2}}>
        <CardActionArea>
          <CardMedia sx={{ objectFit: "contain" }}
            component="img"
            height="300"
            image={props.product.image}
            alt={props.product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export default Item;  