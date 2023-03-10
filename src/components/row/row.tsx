import Cell from "../cell/cell";

interface RowProps {
  row: number[];
}

const Row = ({ row }: RowProps) => {
  return (
    <tr>
      {row.map((cell: number, i: number) => (
        <Cell key={i} cellValue={cell} />
      ))}
    </tr>
  );
};

export default Row;
