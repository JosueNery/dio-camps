import React from 'react'

function ComponentA(props) {

    return (
        <div>Component A
            <div>{props.children}</div>
        </div>
    )
}

export default ComponentA;