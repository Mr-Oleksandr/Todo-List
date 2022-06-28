import Header from "../Header";
import './App.css'
import TodoList from "../TodoList";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import {Component} from "react";
export default class App extends Component {

   generateId = 33;
  state = {
    todoList :[
      {label: 'Working', done:false, id:1},
      {label: 'Learn React', done:false, id:2},
      {label: 'Rest', done:false, id:3},
    ]
  };

    onDeleted = (id) => {
      console.log(id)
      this.setState(({todoList}) => {
          const newArray = todoList.filter((item) => item.id !== id)
          console.log(newArray)
          return {
              todoList:newArray
          }
      })
  };

  onItemAdded = (text) => {
      this.setState(({todoList}) => {
          const newItem = {
              label:text,
              done:false,
              id:this.generateId++,
          }
          const newArray = [
              ...todoList,
              newItem
          ]
          return{
              todoList:newArray
          }
      })
  };

  render(){
       const {todoList} = this.state
    return (
        <div className="App">
          <Header/>
          <div className="container">
            <TodoList todoData={todoList} onDeleted={this.onDeleted}/>
            <ItemAddForm onItemAdded={this.onItemAdded}/>
          </div>
        </div>
    );
  }

}

