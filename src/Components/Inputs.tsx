import styled from "@emotion/styled";
import { Container } from "./Layout";
import { Body, FormOption } from "./Text";
import { mq } from "../Theme/Theme";
import React from "react";

const BaseInput = styled.input(({ theme }) => {
  return {
    boxSizing: "border-box",
    height: 40,
    borderRadius: 4,
    borderWidth: 0,
    backgroundColor: theme.color.form.secondary.background,
    paddingLeft: 10,
    "&:focus-visible": {
      border: `1px solid ${theme.color.form.primary.border}`,
      backgroundColor: theme.color.form.primary.background
    },
    "::placeholder": {
      color: theme.color.form.primary.border
    }
  };
});

const TextInputStyled = styled(BaseInput)(({ theme }) => {
  return {
    width: "100%"
  };
});

const DateInputStyled = styled(BaseInput)<{ dirty?: boolean }>(({ theme }) => {
  return {
    width: "100%",
    color: theme.color.form.primary.border
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
  type?: "text" | "email" | "tel";
  placeholder?: string;
}

const InputField = ({
  name,
  label,
  type = "text",
  placeholder,
  ...rest
}: TextFieldProps) => {
  return (
    <InputContainer>
      <Container flex={2}>
        <Body align="left">{label}</Body>
      </Container>
      <Container flex={5} width="100%">
        <TextInputStyled
          placeholder={placeholder}
          type={type}
          name={name}
          {...rest}
        />
      </Container>
    </InputContainer>
  );
};

const DateField = ({ name, label, placeholder, ...rest }: TextFieldProps) => {
  return (
    <InputContainer>
      <Container flex={2}>
        <Body align="left">{label}</Body>
      </Container>
      <Container flex={5} width="100%">
        <DateInputStyled
          type="date"
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      </Container>
    </InputContainer>
  );
};

const RadioIconContainer = styled(Container)<{ selected: boolean }>(
  ({ theme, selected }) => {
    return {
      marginRight: 10,
      minWidth: 40,
      // width: 40,
      minHeight: 40,
      fontSize: 30,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: selected
        ? theme.color.form.secondary.color
        : theme.color.form.secondary.background,
      cursor: "pointer"
    };
  }
);

interface RadioFieldContainerProps extends TextFieldProps {
  options: { option: string; icon: any }[];
  onChange: (name: string, option: string) => void;
  selected: string;
}

const RadioFieldContainer = ({
  name,
  label,
  options,
  onChange,
  selected
}: RadioFieldContainerProps) => {
  return (
    <>
      <InputContainer>
        <Container flex={2}>
          <Body align="left">{label}</Body>
        </Container>
        <Container flex={5} width="100%" wrap="wrap">
          {options.map(({ option, icon }) => {
            return (
              <Container
                style={{ cursor: "pointer" }}
                direction="row"
                justify="center"
                align="center"
                key={option}
                onClick={() => {
                  onChange(name, option);
                }}
              >
                <RadioIconContainer selected={option === selected}>
                  {
                    <img
                      alt={option}
                      src={option === selected ? icon[1] : icon[0]}
                      width="20"
                    />
                  }
                </RadioIconContainer>
                <FormOption>{option}</FormOption>
              </Container>
            );
          })}
        </Container>
      </InputContainer>
      {/* // </Container> */}
    </>
  );
};
export { TextInputStyled, InputField, RadioFieldContainer, DateField };
