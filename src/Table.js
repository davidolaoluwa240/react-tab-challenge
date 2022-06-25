import TRow from "./TRow";

const Table = ({ items }) => {
  return (
    <table className="table">
      <tbody className="table__body">
        {items.map((item) => (
          <TRow key={item.id} rowItems={Object.entries(item)} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
