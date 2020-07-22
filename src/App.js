import React, {Component} from 'react'
import Table from './Table'

// Then let's move all that data to an array of objects, as if we were bringing in a JSON-based API. 
// We'll have to create this array inside our render().
class App extends Component {
    render() {
        const chaactor = [
            {
                name: 'KC',
                job: 'SE'
            },
            {
                name: 'KJ',
                job: 'SC'
            },
            {
                name: 'CK',
                job: 'CS'
            },
            {
                name: 'KA',
                job: 'BA'
            },
            {
                name: 'KC',
                job: 'QA'
            },
        ]
        return (
            // to pass the data through to the child component (Table) with properties, 
            // kind of how you might pass data through using data- attributes. 
            // as it's not a reserved keyword, so I'll go with characterData.
            // passing through is the characters variable, and I'll put curly braces around 
            // it as it's a JavaScript expression.

            <div className='container'>
                <h1>Hey Kajendran</h1>
                <Table charactorData={chaactor}/>
            </div>
        );
    }
}

export default App

// We export the component as App and load it in index.js. It's not mandatory to separate components into files, 
// but an application will start to get unwieldy and out-of-hand if you don't.