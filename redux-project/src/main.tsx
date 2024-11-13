import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainApp } from "./MainApp.tsx";
import { store } from '#store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import "./normalize.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <Provider store={store}>
                <MainApp />
            </Provider>
        </StrictMode>
    </BrowserRouter>
);
