import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Item from "../../components/Item/Item";

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);

  // console.log(char);

  useEffect(() => {
    asyncMock(dataBooks)
    .then((res) =>setItem(res))
    .catch((error) => console.log(error));
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {item.id ? <Item product= {product} /> : null}
    </div>
  );
};

export default ItemDetail;