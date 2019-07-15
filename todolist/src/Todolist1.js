import React, { Component } from 'react';

class Todolist1 extends Component {
constructor(props){
	super(props);
	this.state = {
		list:[],
		inputValue:'',
	}
}
handleButton(){
    this.setState( {
    list:[...this.state.list,'hello world']

    }
    	)
    }
handleInputChange(e){
	console.log(e.target.value);
}

handleItemCLick(index){
	console.log(index);
	const list = [...this.state.list];
	list.splice(index,1);
	this.setState(
	{
		list: list
	})
}
	

render() {
return(<div>
<div> 
<input type="text" value={this.state.inputValue onChange={this.handleInputChange.bind(this)}}/>
<button onClick={ this.handleButton.bind(this)}>add</button>

<ul>
{
	this.state.list.map((item,index)=>{ 
		return <li key={index} onClick={this.handleItemCLick}>{item}</li> }) 
}
</ul>
</div>
</div>
)
}

}

export default Todolist1;