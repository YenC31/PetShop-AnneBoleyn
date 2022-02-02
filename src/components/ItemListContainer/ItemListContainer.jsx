import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { pedirDatos } from "../../helper/helper";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    pedirDatos(true)
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <h2> Loading... </h2> : <ItemList productos={productos} />}</>
  );
};
