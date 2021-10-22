import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./Router";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
