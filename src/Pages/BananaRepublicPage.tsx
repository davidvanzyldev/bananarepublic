import { useState } from "react";
import { Container, PageContainer } from "../Components/Layout";
import { Body, H1, H2 } from "../Components/Text";
import { mq } from "../Theme/Theme";
import Drawer from "./Modules/Drawer";
import Form from "./Modules/Form";
import MyWorldToday from "./Modules/MyWorldToday";

export default function BananaRepublicPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.log({ drawerOpen });
  return (
    <div className="App">
      <PageContainer>
        <Drawer
          open={drawerOpen}
          toggleOpen={() => {
            setDrawerOpen(!drawerOpen);
          }}
        />
        {/* <Container flex={3}> */}
        <Form
          open={drawerOpen}
          toggleOpen={() => {
            setDrawerOpen(!drawerOpen);
          }}
        />
        {/* </Container> */}
      </PageContainer>
    </div>
  );
}
