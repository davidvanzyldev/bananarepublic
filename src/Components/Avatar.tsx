import styled from "@emotion/styled";
import Face from "../Assets/face.svg";

const AvatarContainer = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "200px",
    marginBottom: 50
    // [mq.sm]: { padding: padding ? padding : autoPad ? theme.layout.md : 0 }
  };
});

export default function Avatar() {
  return (
    <AvatarContainer>
      <img src={Face} width="100%" alt="Profile" />
    </AvatarContainer>
  );
}
