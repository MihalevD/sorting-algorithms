import styled from "@emotion/styled";
import { useState } from "react";
import { Colors } from "../tokens/Colors";
import { Spacings } from "../tokens/Spacings";
import { Text } from "../tokens/Text";
import FlexBox from "./FlexBox";

type AlgoArray = {
  options: string[];
};
export const PickerAlgo: React.FC<AlgoArray> = ({ options }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [option, setOption] = useState("");

  function openAlgo() {
    setOpenOptions(!openOptions);
  }

  return (
    <Wrapper align='center'>
      <Label htmlFor='algorithms'>{Text.chooseAlgo}</Label>
      <Selector
        id='algorithms'
        onClick={() => openAlgo()}
        chosen={option}
        active={openOptions}
      >
        <OptionsBlock active={openOptions}>
          {!!options &&
            options.map((option) => {
              return (
                <Option key={option} onClick={() => setOption(option)}>
                  {option}
                </Option>
              );
            })}
        </OptionsBlock>
        <FlexBox top={Spacings.xxs} left={Spacings.xxs}>
          {option ? option : "Default"}
        </FlexBox>
      </Selector>
    </Wrapper>
  );
};
const Wrapper = styled(FlexBox)`
  margin-right: ${Spacings.lg};
  z-index: 10;
`;
const Selector = styled(FlexBox)<{ chosen: string; active: boolean }>`
  cursor: pointer;
  position: relative;
  height: ${Spacings.lg};
  width: 150px;
  background-color: ${Colors.main};
  color: ${Colors.dark};
  margin-left: ${Spacings.xs};
  &::after {
    position: absolute;
    top: 15%;
    right: 5%;
    content: "^";
    transform: ${(props) => (props.active ? "rotate(0deg)" : "rotate(180deg)")};
    transition: transform 0.5s ease;
  }
`;
const Option = styled("li")`
  display: flex;
  justify-content: center;
  padding: 0;
  transition: all 400ms ease;
  &:hover {
    padding: ${Spacings.xs};
    cursor: pointer;
    background-color: ${Colors.dark};
    color: ${Colors.light};
  }
`;
const OptionsBlock = styled("ul")<{ active: boolean }>`
  background-color: ${Colors.main};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.active ? "120px" : "0")};
  position: absolute;
  top: ${Spacings.lg};
  transition: all 0.5s ease;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: ${(props) => (props.active ? "auto" : "hidden")};
`;
const Label = styled("label")``;
