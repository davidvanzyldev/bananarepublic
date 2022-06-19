import { H1, H2 } from "../../Components/Text";
import { Container, FloatingContainer } from "../../Components/Layout";

interface Props {
  open: boolean;
}

export default function MyWorldToday({ open }: Props) {
  return (
    <FloatingContainer
      variant="orange"
      justify="flex-start"
      direction="column"
      align="center"
      open={open}
    >
      <Container direction="column" autoPad>
        <H1 align="center">My world today</H1>
        <H2 align="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ante
          luctus purus egestas bibendum ac sed purus. Fusce commodo pretium odio
          non dictum. Proin placerat vel magna at consequat. Etiam libero ante,
          euismod sed lacinia id, condimentum et diam. Donec imperdiet augue at
          scelerisque eleifend. Vivamus dapibus, magna eget posuere eleifend, mi
          diam tempor sem, quis faucibus lectus velit in purus. Quisque diam
          velit, hendrerit et scelerisque pulvinar, semper eu ex. Ut venenatis
          nulla mauris, nec fermentum tortor tincidunt ut. Cras posuere auctor
          velit, eget condimentum ex iaculis id. Cras sit amet lectus orci.
        </H2>
      </Container>
    </FloatingContainer>
  );
}
