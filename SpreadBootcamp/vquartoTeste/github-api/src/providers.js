import React from "react";
import GitHubProvider from "./providers/GitHubProvider";
import { ResetCSS } from "./global/resetCSS";
import App from "./App";

const Providers = () => {

    return (
        <main>
            <GitHubProvider>
                <ResetCSS />
                <App />
            </GitHubProvider>
        </main>
    );
};

export default Providers;