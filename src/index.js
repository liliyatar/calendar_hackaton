import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./components/calendar";
import { Months } from "./components/Months";

function App() {
    return <Months />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
