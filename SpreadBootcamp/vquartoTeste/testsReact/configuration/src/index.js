import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a, b) {
    return a + b;
}

function primeiroJSX() {
    return (
        <div className="teste">
            Josue Filipe - Introducao ao ReactJS
            <h6>Soma: {sum(1, 2)}</h6>
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);