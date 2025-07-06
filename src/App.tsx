import  SpreadsheetGrid from "./components/SpreadsheetGrid";
import Toolbar from "./components/Toolbar";

function App() {
    return (
        <main className="flex flex-col h-screen">
          <Toolbar/>

          <div className="flex-1 overflow-auto p-4">  <SpreadsheetGrid/></div>
          
        </main>
    );
}

export default App;
