import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="invoice" element={<Invoice />} />
      </Route>
    </Routes>
  );
};
export default App;
