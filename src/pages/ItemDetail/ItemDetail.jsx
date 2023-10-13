import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Item from "../../components/Item/Item";
import { dataBooks } from "../dataBooks";

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);


  useEffect(() => {
    fetch( dataBooks.id )
    .then((response) => response.json())
    .then((data) => setItem(data))
    .catch((error) => console.log(error));
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {item.id ? <Item item={item} /> : null}
    </div>
  );
};

export default ItemDetail;