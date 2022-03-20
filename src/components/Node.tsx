import styled from "@emotion/styled";
import FlexBox from "./FlexBox";

type NodeType = {
  id: any;
};
export const Node: React.FC<NodeType> = ({ id }) => {
  return <Wrapper className='node' id={id}></Wrapper>;
};

const Wrapper = styled(FlexBox)`
  width: 100%;
  border: 1px solid black;
`;
