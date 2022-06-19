import { Field } from "formik";
import styled from "@emotion/styled";
import { Container } from "./Layout";
import { Body } from "./Text";
import { mq, VariantType } from "../Theme/Theme";

const TextInputStyled = styled.input(({ theme }) => {
  return {
    width: "100%"
  };
});

const DateInputStyled = styled.input(({ theme }) => {
  return {
    width: "100%"
  };
});

const InputContainer = styled.div(({ theme }) => {
  return {
    display: "flex",
    // flex: flex,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    [mq.sm]: {
      flexDirection: "column",
      alignItems: "flex-start"
    }
  };
});

interface TextFieldProps {
  name: string;
  label: string;
}

const TextField = ({ name, label }: TextFieldProps) => {
  return (
    <InputContainer>
      <Container flex={2}>
        <Body align="left">{label}</Body>
      </Container>
      <Container flex={5} width="100%">
        <Field type="text" name={name} component={TextInputStyled} />
      </Container>
    </InputContainer>
  );
};

const DateField = ({ name, label }: TextFieldProps) => {
  return (
    <InputContainer>
      <Container flex={2}>
        <Body align="left">{label}</Body>
      </Container>
      <Container flex={5} width="100%">
        <Field type="date" name={name} component={DateInputStyled} />
      </Container>
    </InputContainer>
  );
};

const RadioFieldContainer = ({ name, label }: TextFieldProps) => {
  return (
    <>
      {/* // <Container justify="center" align="center"> */}
      <InputContainer>
        <Container flex={2}>
          <Body align="left">{label}</Body>
        </Container>
        <Container flex={5} width="100%">
          <Field type="radio" name="gender" value="male" />
          <Field type="radio" name="gender" value="female" />
        </Container>
      </InputContainer>
      {/* // </Container> */}
    </>
  );
};
export { TextField, RadioFieldContainer };
