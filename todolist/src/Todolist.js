import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
// import logo from './logo.svg';
// import './App.css';

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],

//       'learn react',
//       'learn english',
// 'learn vue'
            inputValue: ''
      
    }
    this.handleInputChang = this.handleInputChang.bind(this);
      this.handleButton = this.handleButton.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
  }
  handleButton() {
    
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue:''
    })
    // this.state.list.push('hello world');
  }
  handleInputChang(e){
    this.setState({
      inputValue:e.target.value
      // inputValue:''
    })
    // console.log(inputValue.target.value);
  }
  // handleTtemClick(index){
  //        console.log(index)
  //        const list = [...this.state.list];
  //        list.splice(index, 1);
  //        this.setState({
  //        list: list
  //      })
         
  // }
  handleDelete(index){
   const list = [...this.state.list];
         list.splice(index, 1);
         this.setState({
         list: list
       })
  }

  getTodoItems(){
    return(
        this.state.list.map((item, index) =>{

        // return <li key={index} onClick={this.handleTtemClick.bind(this,index)} > {item} </li>
        return (<TodoItem 
        delete={this.handleDelete} 
        key={index} 
        content={item} 
        index={index}/>
        )
       })

      )
  }
  render() {
  // 父组件通过属性的形式向子组件传递参数 content
// 子组件通过props接受父组件传递过来的参数

 
    //jsx 语法
    return (
      <Fragment>
        <div>

      <input value={this.state.inputValue} onChange={this.handleInputChang}/>
      <button className='red-btn'onClick={this.handleButton}> add </button>      
        </div>
      <ul>{this.getTodoItems()} </ul>
     </Fragment>
    );
  }
 }


export default Todolist;
