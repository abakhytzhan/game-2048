import "./cell.css";

interface CellProps {
  cellValue: number;
}

const Cell = ({ cellValue }: CellProps) => {
  let color = "cell";
  let value = cellValue === 0 ? "" : cellValue;
  if (value) {
    color += ` color-${value}`;
  }

  return (
    <td>
      <div className={color}>
        <div className="number">{value}</div>
      </div>
    </td>
  );
};

export default Cell;
