import styled from "@emotion/styled";
import { Spacings } from "../tokens/Spacings";

export type FlexBoxProps = {
  left?: boolean | string;
  right?: boolean | string;
  top?: boolean | string;
  bottom?: boolean | string;
  spacing?: string;
  fullWidth?: boolean;
  fullPadding?: boolean;
  link?: boolean;
  align?: "center" | "flex-start" | "flex-end" | "normal";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  alignText?: "center" | "left" | "right";
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  onClick?: (event?: any) => void;
};

const FlexboxStyles = `
  display: flex;
`;

type DeterminePaddingPropsOverloads = {
  (
    padding?: string | boolean,
    spacing?: string,
    fullPadding?: boolean,
    fallback?: string
  ): string;
};

// If a string value is given to the top|right|bottom|left values, use that value instead of the padding
// This solves an issue where you want a different padding in one of those directions
// Without this you need to use two FigmaBoxes to achieve different paddings in different directions
const determinePadding: DeterminePaddingPropsOverloads = (
  padding,
  spacing,
  fullPadding,
  fallback
) => {
  const defaultValue = "0";

  if (typeof padding === "string") {
    return padding || defaultValue;
  }

  if (padding || fullPadding) {
    return spacing || fallback || defaultValue;
  }

  return defaultValue;
};

export default styled.div<FlexBoxProps>`
  ${FlexboxStyles}
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  flex-direction: ${({ direction }) => direction || `row`};
  text-align: ${({ alignText }) => !!alignText && `${alignText}`};
  justify-content: ${({ justify }) => !!justify && `${justify}`};
  align-items: ${({ align }) => !!align && `${align}`};
  padding-left: ${({ left, spacing, fullPadding }) =>
    (!!left || fullPadding) &&
    determinePadding(left, spacing, fullPadding, Spacings.xs)};
  padding-right: ${({ right, spacing, fullPadding }) =>
    (!!right || fullPadding) &&
    determinePadding(right, spacing, fullPadding, Spacings.xs)};
  padding-top: ${({ top, spacing, fullPadding }) =>
    (!!top || fullPadding) &&
    determinePadding(top, spacing, fullPadding, Spacings.xs)};
  padding-bottom: ${({ bottom, spacing, fullPadding }) =>
    (!!bottom || fullPadding) &&
    determinePadding(bottom, spacing, fullPadding, Spacings.xs)};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  ${({ link }) => (link ? LinkStyles : "")}
`;

export const LinkStyles = `
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
