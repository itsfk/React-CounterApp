import React from 'react';
class Child extends React.Component {
     constructor(props) {
         super(props);
         this.state = {  
           count:0,
         }
     }
     inc=()=>{
      console.log("I am working fine");
        this.setState({count:this.state.count+1});
     }
     dec=()=>{
        this.setState({count:this.state.count-1});
    }
    render() { 
        return ( 
            <div>
            <button onClick={this.inc}>+</button>
            <br/>
            <button className="button1" onClick={this.dec}>-</button>
            <h2>{this.state.count}</h2>
            </div>
         )
    }
}
 
export default Child;