import React from 'react'

const Rainbow = (WrappedComponent) =>{

    const colours = ['red', 'pink','orange', 'blue', 'green', 'yellow']
   // Randomly generating the 0-5 array number
    const randomColour = colours[Math.floor(Math.random()* 5)]
   // concating it with -text to enerate CSS class
    const className = randomColour + "-text";

    return (props) => {
        return (
            <div className= {className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}

export default Rainbow