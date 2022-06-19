import styled from "@emotion/styled";
import { Container } from "../../Components/Layout";

// An example page of how to handle component or
// page specific styling
const FormContainer = styled(Container)(({ theme }) => {
  return {
    maxWidth: 720
  };
});

const MembershipSpacer = styled.div(({ theme }) => {
  return {
    marginTop: 20,
    marginBottom: 20,
    width: "100%"
  };
});

export { FormContainer, MembershipSpacer };
