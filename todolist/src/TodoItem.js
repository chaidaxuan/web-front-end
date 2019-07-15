import React,{Component} from 'react';
class TodoItem extends Component {

	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
    handleDelete() {
    	this.props.delete(this.props.index);
    }
// 子组件如果想和父组件通行，子组件要调用父组件传递过来的方法
    render(){
    	const {content} = this.props;
    	return (
    		<div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
    		)
    }

}
export default TodoItem;