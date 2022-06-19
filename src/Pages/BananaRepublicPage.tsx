import { useState } from "react";
import { PageContainer } from "../Components/Layout";
import Drawer from "./Modules/Drawer";
import Form from "./Modules/Form";

export default function BananaRepublicPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="App">
      <PageContainer>
        <Drawer
          open={drawerOpen}
          toggleOpen={() => {
            setDrawerOpen(!drawerOpen);
          }}
        />
        <Form open={drawerOpen} />
      </PageContainer>
    </div>
  );
}
