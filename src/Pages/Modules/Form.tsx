import Avatar from "../../Components/Avatar";
import { Body, H1, H2 } from "../../Components/Text";
import { Container } from "../../Components/Layout";
import ArrowButton from "../../Components/ArrowButton";
import MyWorldToday from "./MyWorldToday";
import { Formik, Field } from "formik";
import {
  TextField,
  RadioFieldContainer,
  DateField
} from "../../Components/Inputs";
import { FormContainer } from "./Form.styles";

interface Props {
  toggleOpen: () => void;
  open: boolean;
}

export default function Form({ toggleOpen, open }: Props) {
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
            customerId: ""
          }}
          onSubmit={(values) => {
            console.log("submitted", values);
          }}
        >
          {({ values, getFieldProps, handleSubmit }) => (
            <>
              <TextField label="Name" name="name" />
              <RadioFieldContainer label="Gender" name="gender" />
              <DateField label="Date of Birth" name="dob" />

              <div>
                Email:
                <Field type="email" name="email" />
              </div>

              <div>
                Mobile:
                <Field type="tel" name="telephone" />
              </div>

              <TextField label="Customer Id" name="customerId" />

              <div>
                Membership:
                <Field type="radio" name="membership" value="male" />
                <Field type="radio" name="membership" value="female" />
              </div>

              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </>
          )}
        </Formik>
      </FormContainer>
      <MyWorldToday open={open} />
    </Container>
  );
}
