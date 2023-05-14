import { BrowserRouter } from "react-router-dom";
import { TheMainWrapper } from "./App.style";
import { CommonRoutes } from "./routes/commonRoutes";

function App() {
  return (
    <>
      <TheMainWrapper>

        <BrowserRouter>
          <CommonRoutes />
        </BrowserRouter>
      </TheMainWrapper>
    </>
  );
}

export default App;
