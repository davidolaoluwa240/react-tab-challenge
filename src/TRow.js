import TData from "./TData";

const TRow = ({ rowItems }) => {
  return (
    <tr className="table__row">
      {rowItems.map(([key, value]) => (
        <TData key={key} item={value} />
      ))}
    </tr>
  );
};

export default TRow;
