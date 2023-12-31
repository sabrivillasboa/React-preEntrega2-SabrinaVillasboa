import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
  } from "@mui/material";
  
  const Item = (props) => {
    const { product, detailedView } = props;
    
    return (
      <Card sx={{ width: 300, m: 2}}>
        <CardActionArea>
          <CardMedia sx={{ objectFit: "contain" }}
            component="img"
            height="300"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" >
              {product.name}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Precio: ${product.price}
            </Typography>
            {detailedView && (
            <>
            <Typography variant="subtitle2" color="text.secondary">
              Autor: {product.author}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Sinopsis: {product.description}
            </Typography>
            </>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export default Item;  