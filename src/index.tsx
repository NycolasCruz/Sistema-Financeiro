import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";
import { DataContextProvider } from "./contexts/DataContext";
import App from "./App";

import "./global.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<DataContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</DataContextProvider>
);

reportWebVitals();
