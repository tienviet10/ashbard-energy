import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import OilAndGas from "./pages/Home/OilAndGas";
import Transportation from "./pages/Home/Transportation";
import Consulting from "./pages/Home/Consulting";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname == "/sign-in" || pathname == "/sign-up") && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )}
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />,
        )}
        <Route exact path="/oil-and-gas" element={<OilAndGas />} />
        <Route exact path="/transportation" element={<Transportation />} />
        <Route exact path="/consulting" element={<Consulting />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
