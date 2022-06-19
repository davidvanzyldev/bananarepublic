import Avatar from "../../Components/Avatar";
import { H1, H2 } from "../../Components/Text";
import { Container } from "../../Components/Layout";
import ArrowButton from "../../Components/ArrowButton";

interface Props {
  toggleOpen: () => void;
  open: boolean;
}

export default function Drawer({ toggleOpen, open }: Props) {
  return (
    <Container
      variant="yellow"
      justify="center"
      align="center"
      direction="column"
      autoPad
      flex={1}
      // drawer needs to stay above the sliding page
      style={{ zIndex: 100 }}
    >
      <Avatar />
      <H1 align="center">Front-end challenge!</H1>
      <H2 align="center">
        This is a design that you will need to code up to impress us
      </H2>
      <ArrowButton onClick={toggleOpen} open={open} />
      {/* <Body>Name</Body> */}
    </Container>
  );
}
