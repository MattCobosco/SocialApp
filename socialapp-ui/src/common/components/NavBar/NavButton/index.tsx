import styled from "styled-components";
import { colorPalette } from "../../../styledHelpers/colorPalette";

interface NavButtonProps {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  customClassName?: boolean;
  className?: string;
}

export const NavButton = (props:NavButtonProps) => {
  const { label, onClick, style } = props;

  const Button = styled.button`
    background-color: ${colorPalette.white};
    heght: 100%;
    border: none;
    `;

  return (
    <Button
      onClick={onClick}
      style={style}>
      {label}
    </Button>
  );
};
