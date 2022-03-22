import React, { useState } from "react";
import styled from "@emotion/styled";
import { Spacings } from "../tokens/Spacings";
import { Colors } from "../tokens/Colors";
import FlexBox from "./FlexBox";
import { PickerAlgo } from "./PickerAlgo";
import { Text } from "../tokens/Text";
import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { selectSort } from "../algorithms/selectSort";
import { mergeSort } from "../algorithms/mergeSort";

const sortingNames = [
  "Selection sort",
  "Bubble sort",
  "Insertion Sort",
  "Merge sort",
  "Quick sort",
  "Heap sort",
  "Counting sort",
  "Radix sort",
];
type Name = {
  sliderValue: any;
  setSliderValue: any;
  array: any;
  setArray: any;
};
export const NavbarMain: React.FC<Name> = ({
  sliderValue,
  setSliderValue,
  array,
  setArray,
}) => {
  const [speedValue, setSpeedValue] = useState("150");
  const [algoName, setAlgoName] = useState("Default");
  const [loading, setLoading] = useState(false);
  async function handleChange(value: string) {
    await setSliderValue(value);
    if (array.length > 0) {
      const newArray = createNewArray(value);
      paintNumbers(newArray, value);
    }
  }
  function handleSpeed(value: string) {
    setSpeedValue(value);
  }
  function handleClick() {
    const newArray = createNewArray(sliderValue);
    paintNumbers(newArray, sliderValue);
  }
  function createNewArray(count: string) {
    const newArray = [...Array(Number(count))].map((_) =>
      Math.ceil(Math.random() * 13)
    );
    setArray(newArray);
    return newArray;
  }

  function paintNumbers(array: any, count: string) {
    const nodes = document.querySelectorAll<HTMLElement>(".node");
    nodes.forEach((node) => {
      node.style.background = "white";
    });
    for (let i = 0; i < Number(count); i++) {
      for (let j = 0; j < array[i]; j++) {
        var node = document.getElementById(`${j}-${i}`);
        node!!.style.background = "green";
      }
    }
  }
  function handleClickTwo() {
    setLoading(true);
    switch (algoName) {
      case "Bubble sort":
        bubbleSort(array, speedValue).then(() => setLoading(false));
        break;
      case "Insertion sort":
        insertionSort(array, speedValue).then(() => setLoading(false));
        break;
      case "Selection sort":
        selectSort(array, speedValue).then(() => setLoading(false));
        break;
      case "Merge sort":
        mergeSort(array, speedValue).then(() => setLoading(false));
        break;
      default:
        insertionSort(array, speedValue).then(() => setLoading(false));
        break;
    }
  }
  return (
    <Wrapper fullWidth fullPadding spacing={Spacings.md} justify='center'>
      <PickerAlgo
        options={sortingNames}
        algoName={algoName}
        setAlgoName={setAlgoName}
      ></PickerAlgo>
      <StyledButton2 onClick={handleClickTwo} disabled={loading}>
        {Text.sort}
      </StyledButton2>
      <StyledButton onClick={handleClick} disabled={loading}>
        {Text.generate}
      </StyledButton>
      <RangeBox align='center' left={Spacings.lg}>
        <label htmlFor='arraySize' style={{ marginRight: "15px" }}>
          Size of array :{" "}
        </label>
        <input
          type='range'
          min='1'
          max='100'
          value={sliderValue}
          id='arraySize'
          disabled={loading}
          onChange={(event) => handleChange(event.target.value)}
        />
      </RangeBox>
      <RangeBox align='center'>
        <label htmlFor='arraySize' style={{ marginRight: "15px" }}>
          Speed of sort :{" "}
        </label>
        <input
          type='range'
          min='10'
          max='300'
          value={speedValue}
          step='10'
          id='speed'
          disabled={loading}
          onChange={(event) => handleSpeed(event.target.value)}
        />
      </RangeBox>
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  box-sizing: border-box;
  top: 0;
  height: ${Spacings.xxl};
  background-color: ${Colors.light};
  color: ${Colors.dark};
`;

const StyledButton = styled("button")`
  margin-left: ${Spacings.lg};
  background: ${Colors.main};
`;

const StyledButton2 = styled("button")`
  margin-left: ${Spacings.lg};
  background: #5a1d1d;
  color: white;
`;

const RangeBox = styled(FlexBox)`
  width: 20%;
`;
