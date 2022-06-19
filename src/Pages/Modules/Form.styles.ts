import styled from "@emotion/styled";
import { Container } from "../../Components/Layout";
import { mq, VariantType } from "../../Theme/Theme";

const FormContainer = styled(Container)(({ theme }) => {
  return {
    maxWidth: 720
  };
});

export { FormContainer };
