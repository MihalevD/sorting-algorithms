import styled from "@emotion/styled";
import { Node } from "./Node";

type Columns = {
  columns: any;
};
export const GridBox: React.FC<Columns> = ({ columns }) => {
  var nodes = [];
  for (var i = 0; i < columns * 13; i++) {
    nodes.push(<Node key={i} id={i} />);
  }
  return <Grid columns={columns}>{nodes}</Grid>;
};

const Grid = styled("div")<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: repeat(13, 1fr);
  grid-gap: 10px;
  height: 100%;
  transform: rotate(180deg);
`;
