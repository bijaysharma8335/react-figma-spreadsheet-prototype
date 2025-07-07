import OrderTabs from "./components/OrderTabs";
import SpreadsheetGrid from "./components/SpreadsheetGrid";

import Toolbar from "./components/Toolbar";
import Topbar from "./components/Topbar";

function App() {
    return (
        <main className="flex flex-col h-screen">
            <Topbar />
            <Toolbar />

            <div className="flex-1 overflow-auto ">
                {" "}
                <SpreadsheetGrid />
            </div>
            <OrderTabs/>
        </main>
    );
}

export default App;
