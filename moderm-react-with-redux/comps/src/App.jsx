import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
import ButtonsPage from "./pages/ButtonsPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
// import './App.css'

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonsPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
