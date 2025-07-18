import type React from "react";
import SpreadsheetGrid from "./components/SpreadsheetGrid";

import Toolbar from "./components/Toolbar";
import Topbar from "./components/Topbar";

const App: React.FC = () => {
    return (
        <main className="flex flex-col h-screen">
            <Topbar />
            <Toolbar />

            <div className="flex-1 overflow-auto ">
                {" "}
                <SpreadsheetGrid />
            </div>
        </main>
    );
};

export default App;
