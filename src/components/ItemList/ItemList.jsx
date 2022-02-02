import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <section className="ItemListContainer">
      <div className="row">
        {productos.map((el) => (
          <Item
            key={el.id}
            nombre={el.nombre}
            precio={el.precio}
            img={el.img}
            descripcion={el.descripcion}
          />
        ))}
      </div>
    </section>
  );
};
