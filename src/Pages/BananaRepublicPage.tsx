import { useRef, useState } from "react";
import { PageContainer } from "../Components/Layout";
import Drawer from "./Modules/Drawer";
import Form from "./Modules/Form";

export default function BananaRepublicPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  let myRef = useRef(null);
  console.log({ myRef });
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen && myRef !== null) {
      myRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="App">
      <PageContainer>
        <Drawer open={drawerOpen} toggleOpen={handleDrawerToggle} />
        <div ref={myRef} />
        <Form open={drawerOpen} />
      </PageContainer>
    </div>
  );
}
