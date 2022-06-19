import styled from "@emotion/styled";
import { mq, PaddingSizeTYpe } from "../Theme/Theme";

interface ContainerProps {
  direction?: "row" | "column";
  justify?: "flex-start" | "center" | "flex-end";
  align?: "flex-start" | "center" | "flex-end";
  variant?: "orange" | "yellow" | "white";
  background?: string;
  padding?: PaddingSizeTYpe;
  autoPad?: boolean;
  autoPadDirection?: "horizontal" | "vertical" | "both";
  flex?: number | 0;
  position?: "static" | "relative" | "absolute";
  height?: string;
  width?: string;
  wrap?: "wrap" | "nowrap";
  // padding?:
}

const Container = styled.div<ContainerProps>(
  ({
    theme,
    direction,
    justify = "flex-start",
    align = "flex-start",
    variant,
    background,
    padding,
    autoPad = false,
    flex = 0,
    position = "static",
    height,
    width,
    wrap = "nowrap"
  }) => {
    const newPadding = theme.layout[padding];
    return {
      height: height,
      width: width,
      flexWrap: wrap,
      position,
      display: "flex",
      flex: flex,
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
      backgroundColor: background
        ? background
        : variant
        ? theme.color.backgrounds[variant]
        : undefined,
      padding: padding ? newPadding : autoPad ? theme.layout.xl : 0,

      [mq.xl]: {
        padding: padding ? newPadding : autoPad ? theme.layout.xl : 0
      },
      [mq.lg]: {
        padding: padding ? newPadding : autoPad ? theme.layout.lg : 0
      },
      [mq.md]: {
        padding: padding ? newPadding : autoPad ? theme.layout.md : 0
      },
      [mq.sm]: {
        padding: padding ? newPadding : autoPad ? theme.layout.sm : 0
      },
      [mq.xs]: {
        padding: padding ? newPadding : autoPad ? theme.layout.sm : 0
      }
    };
  }
);

const FloatingContainer = styled(Container)<{ open: boolean }>(({ open }) => {
  return {
    position: "absolute",
    height: "100%",
    display: "flex",
    width: "100%",
    overflowY: "scroll",
    transitionDuration: "0.5s",
    transitionProperty: "left",
    left: open ? "0%" : "-100%",
    top: 0,
    [mq.sm]: {
      left: 0,
      transitionDuration: "0.5s",
      transitionProperty: "top",
      top: open ? "0%" : "-100%"
    }
  };
});

const PageContainer = styled.div<ContainerProps>(() => {
  return {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    [mq.sm]: { flexDirection: "column" }
  };
});

export { Container, PageContainer, FloatingContainer };
