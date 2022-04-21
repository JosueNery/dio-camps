import React from "react";
import mock from "../mock";
import Button from "../components/Button";

const App = () => {

    const name = 'Digital Innovation One'

    const handleClick = (e, id) => {
        console.log('deletar cliente')
        alert(`ID do cliente : ${id}`)
    }

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`} >
                <li>{customer.name} <Button onClick={() => handleClick(customer.id)}></Button></li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
                <li >{skill}</li>
            </div>
        )
    }

    const showEvent = (e) => {
        console.log('evento clicado')
        console.log(e)
        alert(name)
    }

    const deleteButton = <button onClick={showEvent}>Show Event</button>

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo :3</p>
            <div>
                <ul>
                    {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};

export default App;