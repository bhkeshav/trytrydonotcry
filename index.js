import React from 'react';
import ReactDOM from 'react-dom';
import Keshav from './components/header';
import Header from './components/class';
import JSON from './12.1 db.json.json';
import Water from './components/news-list';


// exercise 1

/*const App = ()=>{
  return <h1>hello world***lets learn something new <i>keshav bhattarai</i></h1>;
}
ReactDOM.render(<App/>, document.getElementById('root')); */

// exercise 2

/*let App1 = () =>{
  
return React.createElement("div",{className:'justTry'},'happy birthday 2 you') // react act in this way, remember className not class
};
ReactDOM.render(<App1/>, document.getElementById('root'));  */

//ReactDOM.render(<Keshav/>, document.querySelector("#root"));

// exercise 3
class App extends React.Component{  
   state={
     happy: JSON,     
     filtered:[]
   }
   getkeyword=(event)=>{
     //console.log(event.target.value);
     let filtered = this.state.happy.filter((item)=>{
         return item.title.indexOf(event.target.value) > -1
     })
     console.log(filtered)
     this.setState({
       filtered:filtered
     })
   }   
  render(){  
  return <div>
            <div><Keshav/></div>
            <Header news ={this.getkeyword}/>
            <Water news = {this.state.filtered.length===0 ? this.state.happy: this.state.filtered}>
             Here is the data of JSON.
            </Water>    
                   
          </div>
}
};

ReactDOM.render(<App/>, document.querySelector('#root'));

