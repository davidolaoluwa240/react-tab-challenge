import List from "./List";

const ListBase = ({ items }) => {
  return (
    <ul className="lists">
      {items.map((item) => (
        <List key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ListBase;
