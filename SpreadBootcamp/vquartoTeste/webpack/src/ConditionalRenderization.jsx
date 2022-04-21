import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Josué Filipe',
        skills: ['Sobreviver', 'outras coisas']
    },
    {
        id: 2,
        name: 'Fulano de tal',
        skills: ['Bola de fogo nivel 1', 'Correr']
    },
    {
        id: 3,
        name: 'Beltrano de tal',
        skills: ['lutar com dragao', '<= um bardo']
    },
    {
        id: 4,
        name: 'Sicrano de tal',
        skills: ['vish kk']
    }
]

const ConditionalRenderization = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`} >
                <li>{customer.name}</li>
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
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo :3</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};

export default ConditionalRenderization;