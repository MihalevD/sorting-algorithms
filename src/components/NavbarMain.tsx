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
    switch (algoName) {
      case "Bubble sort":
        bubbleSort(array, speedValue);
        break;
      case "Insertion sort":
        insertionSort(array, speedValue);
        break;
      case "Selection sort":
        selectSort(array, speedValue);
        break;
      case "Merge sort":
        mergeSort(array, speedValue);
        break;
      default:
        insertionSort(array, speedValue);
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
      <StyledButton2 onClick={handleClickTwo}>{Text.sort}</StyledButton2>
      <StyledButton onClick={handleClick}>{Text.generate}</StyledButton>
      <input
        type='range'
        min='1'
        max='100'
        value={sliderValue}
        onChange={(event) => handleChange(event.target.value)}
      />
      <input
        type='range'
        min='10'
        max='300'
        value={speedValue}
        step='10'
        onChange={(event) => handleSpeed(event.target.value)}
      />
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
