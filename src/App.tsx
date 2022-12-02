import { NavBarComponent } from "components/base/zindex";
import { Routes, Route } from "react-router-dom";
import InformationPaiementView from "views/information-paiement-view/information-paiement.view";
import { MainView } from "views/main.view";
import { TestView } from "views/test/test.view";

function App() {
  return (
    <>
      <div className="app">
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="test" element={<TestView />} />
          <Route path="cart" element={<InformationPaiementView />} />
          <Route path="paiement" element={<InformationPaiementView />} />
          {/* <Route path="*" element={<NotFoundView />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
