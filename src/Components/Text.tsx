import styled from "@emotion/styled";
import { mq, VariantType } from "../Theme/Theme";

interface TextBaselineProps {
  align: "left" | "center" | "right";
  color?: string;
  variant?: VariantType;
}

interface TextProps {
  // color override if we don't want to use a variant
}

const TextBaseline = styled.div<TextBaselineProps>(
  ({ theme, align = "left", color, variant = "primary" }) => ({
    fontFamily: theme.typography.global.fontFamily,
    textAlign: align,
    color: color ? color : variant ? theme.color.text[variant] : "black"
  })
);

const H1 = styled(TextBaseline)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "bold",
  marginBottom: 20,
  [mq.xl]: { fontSize: "32px" },
  [mq.lg]: { fontSize: "26px" },
  [mq.md]: { fontSize: "24px" },
  [mq.sm]: { fontSize: "22px" },
  [mq.xs]: { fontSize: "20px" }
}));

const H2 = styled(TextBaseline)(({ theme }) => ({
  fontSize: "20px",
  marginBottom: 30,
  fontWeight: "normal",
  [mq.xl]: { fontSize: "20px" },
  [mq.lg]: { fontSize: "18px" },
  [mq.md]: { fontSize: "16px" },
  [mq.sm]: { fontSize: "14px" },
  [mq.xs]: { fontSize: "12px" }
}));

const Body = styled(TextBaseline)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "normal",
  letterSpacing: "0.1px",
  [mq.sm]: { fontSize: "12px" }
}));

export { H1, H2, Body };
