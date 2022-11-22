import { NavBarComponent } from "components/base/zindex";
import { Routes, Route } from "react-router-dom";
import CartView from "views/cart-view/cart.view";
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
          <Route path="cart" element={<CartView />} />

          {/* 
          <Route path="programs">
            <Route index element={<ProgramListView />} />
            <Route path=":id" element={<ProgramStartInfoView />} />
          </Route> */}

          {/* <Route path="*" element={<NotFoundView />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
