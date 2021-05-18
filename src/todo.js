import  React  from "react";
var todoItem = [];
class TodoApp extends React.Component{
    constructor(props) {
        super(props);
        this.todoItem = { value: '' }
        this.itemIndex = {}
    }
    addItem(todoItem) {
        
    }
    removeItem(itemIndex) {
        
    }
    TodoDone(itemIndex) {
        
    }
    render() {
        return (
            <div id = "main">
                <TodoTitle />
                <TodoAddForm/>
                <TodoList/>
            </div>
        );
    }
}
class TodoTitle extends React.Component {
    render() {
        return <h1>CGU Todo list</h1>;
    }
}
class TodoAddForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        this.setState({ value: event.target.value });
        event.preventDefault();                                                                                                          
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
class TodoList extends React.Component {
    render() { 
        return (
            <h1>hi</h1>
        )
    }
}

export default TodoApp;


