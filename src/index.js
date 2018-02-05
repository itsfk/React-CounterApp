import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Components/child';
const App = () =>{
    return(
        <div>
        <h1>Counter App</h1>
        <Child/>
        </div>
    )



}


ReactDOM.render(<App />, document.getElementById('root'));

