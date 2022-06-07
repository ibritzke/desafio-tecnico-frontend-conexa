import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Header />
      <GlobalStyle />
    </BrowserRouter>
  );
}


