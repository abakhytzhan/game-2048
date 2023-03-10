import Row from "../row/row";

interface BoardProps {
  board: number[][];
}

const Board = ({ board }: BoardProps) => {
  return (
    <table>
      <tbody>
        {board?.map((row: number[], i: number) => (
          <Row key={i} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Board;
