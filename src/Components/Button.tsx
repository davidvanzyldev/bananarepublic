import styled from "@emotion/styled";
import { mq, VariantType } from "../Theme/Theme";

interface ButtonProps {
  variant?: VariantType;
  marginSide?: "left" | "right";
}

const ButtonContainer = styled.div(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    [mq.sm]: { flexDirection: "column" }
  };
});

const Button = styled.button<ButtonProps>(
  ({ theme, variant = "primary", marginSide }) => ({
    fontFamily: theme.typography.global.fontFamily,
    backgroundColor: theme.color[variant].main,
    color: theme.color[variant].contrast,
    borderWidth: 0,
    borderRadius: 5,
    padding: "12px 40px",
    marginLeft: marginSide === "left" ? theme.layout.md : 0,
    marginRight: marginSide === "right" ? theme.layout.md : 0,

    "&:hover": {
      opacity: 0.7
    },
    "&:active": {
      opacity: 0.3
    },

    [mq.lg]: {
      marginLeft: marginSide === "left" ? theme.layout.sm : 0,
      marginRight: marginSide === "right" ? theme.layout.sm : 0
    },
    [mq.sm]: {
      margin: 0,
      width: "100%",
      marginBottom: 10
    }
  })
);

export { Button, ButtonContainer };
