import { useRef, useState } from "react";
import { PageContainer } from "../Components/Layout";
import Drawer from "./Modules/Drawer";
import Form from "./Modules/Form";

export default function BananaRepublicPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  let scrollRef = useRef(null);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen && scrollRef !== null) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="App">
      <PageContainer>
        <Drawer open={drawerOpen} toggleOpen={handleDrawerToggle} />
        <div ref={scrollRef} />
        <Form open={drawerOpen} />
      </PageContainer>
    </div>
  );
}
