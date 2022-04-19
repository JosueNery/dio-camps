import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import "./styles.css"


function soma(a, b) {
    alert(a + b);
}

function App() {

    return (
        <div className="App">
            Hello World!
            <Button onClick={() => soma(10, 30)} name="Josue Filipe" />
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => soma(20, 40)} name="Josue Filipe" />
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);