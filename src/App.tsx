import { Routes, Route } from "react-router-dom";
import { MainView } from "views/main.view";
import "./App.scss";

function App() {
  return (
    <>
      {/* <Header /> */}

      <div className="app">
        <Routes>
          <Route path="/" element={<MainView />} />

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
