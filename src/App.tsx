import BananaRepublicPage from "./Pages/BananaRepublicPage";
import { jsx, ThemeProvider } from "@emotion/react";
import { Global, css } from "@emotion/react";
import { theme } from "./Theme/Theme";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BananaRepublicPage />
      </ThemeProvider>
    </div>
  );
}
