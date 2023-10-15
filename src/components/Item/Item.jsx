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
      <Card sx={{ width: 250, m: 2}}>
        <CardActionArea>
          <CardMedia sx={{ objectFit: "contain" }}
            component="img"
            height="300"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            {detailedView && (
            <>
              <Typography variant="body2" color="text.secondary">
                Autor: {product.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Categoría: {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stock: {product.stock}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Precio: ${product.price}
              </Typography>
            </>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export default Item;  