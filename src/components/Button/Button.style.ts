import styled from "styled-components";

const getBackgroundColor = (type: string) => {
  switch (type) {
    case "primary":
      return "#002766";
    case "secondary":
      return "#fff";
    default:
      return "transparent";
  }
};

const getTextColor = (type: string) => {
  switch (type) {
    case "primary":
      return "#fff";
    case "secondary":
      return "#002766";
    default:
      return "#000";
  }
};

export const ButtonContainer = styled.button<{ type?: string }>`
  padding: 8px 16px;
  margin-left: 10px;
  border: 1px solid #000;
  background-color: ${(props) => getBackgroundColor(props.type)};
  color: ${(props) => getTextColor(props.type)};
  border-radius: 4px;
  cursor: pointer;
`;
