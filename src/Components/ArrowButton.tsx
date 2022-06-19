import styled from "@emotion/styled";
import Arrow from "../Assets/arrow.svg";
import { mq } from "../Theme/Theme";

const ArrowContainer = styled.div<{ open: boolean }>(({ theme, open }) => ({
  width: 20,
  height: 20,
  backgroundColor: theme.color.text.primary,
  borderRadius: 50,
  display: "flex",
  justifyContent: "center",
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
  padding: 15,
  "&:hover": {
    opacity: 0.9
  },
  "&:active": {
    opacity: 0.5
  },
  [mq.sm]: { transform: open ? "rotate(90deg)" : "rotate(-90deg)" }
}));

interface Props {
  onClick: () => void;
  open: boolean;
}

export default function ArrowButton({ onClick, open }: Props) {
  return (
    <ArrowContainer onClick={onClick} open={open}>
      <img src={Arrow} alt="Arrow-Button" />
    </ArrowContainer>
  );
}
