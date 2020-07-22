import React, { Component } from 'react'

// The other type of component in React is the simple component, which is a function. This component doesn't use the class keyword. 
// Let's take our Table and make two simple components for it - a table header, and a table body.
// going to use ES6 arrow functions to create these simple components

const TableHeader = () => { // simple component
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.charactorData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component { // class component
    render() {
        const {charactorData} = this.props

        return (
            <table>
                <TableHeader></TableHeader>
                <TableBody charactorData={charactorData}/>
            </table>
        );
    }
}

export default Table

// As you can see, components can be nested in other components, and simple and class components can be mixed.
// A class component must include render(), and the return can only return one parent element.
// Note that if the return is contained to one line, it does not need parentheses.

