import { Container } from "../../Components/Layout";
import MyWorldToday from "./MyWorldToday";
import { Formik, Field } from "formik";
import {
  InputField,
  RadioFieldContainer,
  DateField
} from "../../Components/Inputs";
import { FormContainer, MembershipSpacer } from "./Form.styles";
import { Button, ButtonContainer } from "../../Components/Button";
import {
  Card,
  MarsSymbol,
  VenusSymbol,
  CardAlt,
  MarsSymbolAlt,
  VenusSymbolAlt
} from "../../Assets/Icons";

interface Props {
  open: boolean;
}

export default function Form({ open }: Props) {
  return (
    <Container
      variant="white"
      height="100%"
      flex={2}
      justify="center"
      align="center"
      position="relative"
    >
      <FormContainer autoPad direction="column" position="relative" flex={1}>
        <Formik
          initialValues={{
            name: "",
            gender: "",
            dob: "",
            telephone: "",
            email: "",
            customerId: "",
            membership: ""
          }}
          onSubmit={(values) => {
            console.log("submitted", values);
          }}
        >
          {({ values, getFieldProps, handleSubmit, setFieldValue }) => (
            <>
              <Field
                label="Name"
                name="name"
                placeholder="Name"
                as={InputField}
              />
              <RadioFieldContainer
                label="Gender"
                name="gender"
                options={[
                  { option: "male", icon: [MarsSymbol, MarsSymbolAlt] },
                  { option: "female", icon: [VenusSymbol, VenusSymbolAlt] }
                ]}
                selected={values.gender}
                onChange={(name, option) => setFieldValue(name, option)}
              />
              <Field
                label="Date of Birth"
                name="dob"
                placeholder="Date of Birth"
                as={DateField}
              />

              <Field
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
                as={InputField}
              />

              <Field
                label="Mobile"
                name="telephone"
                type="tel"
                placeholder="Mobile Number"
                as={InputField}
              />

              <Field
                label="Customer Id"
                name="customerId"
                placeholder="Customer Id"
                as={InputField}
              />

              <MembershipSpacer>
                <RadioFieldContainer
                  label="Membership"
                  name="membership"
                  // options={["1", "2"]}
                  options={[
                    { option: "classic", icon: [Card, CardAlt] },
                    { option: "silver", icon: [Card, CardAlt] },
                    { option: "gold", icon: [Card, CardAlt] }
                  ]}
                  selected={values.membership}
                  onChange={(name, option) => setFieldValue(name, option)}
                />
              </MembershipSpacer>

              <ButtonContainer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    console.log("Cancelled");
                  }}
                >
                  CANCEL
                </Button>
                <Button type="submit" onClick={handleSubmit} marginSide="left">
                  SAVE
                </Button>
              </ButtonContainer>
            </>
          )}
        </Formik>
      </FormContainer>
      <MyWorldToday open={open} />
    </Container>
  );
}
