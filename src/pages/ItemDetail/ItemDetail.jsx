import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/Item/Item";
import { asyncMock } from "../../asyncMock";
import { dataBooks } from "../dataBooks";
import { Box } from "@mui/material";

const ItemDetail = (props) => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {

    asyncMock(dataBooks)
    .then((result) => {
      const filteredElement = result.find(prod => prod.id == id);
      setItem(filteredElement);
      console.log(item);
    }).catch((error) => console.log(error));
  }, [id]);


  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <Item product={item} detailedView={true} />
    </Box>
  );
};

export default ItemDetail;