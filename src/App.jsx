import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

class App extends Component {

    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false }
        ]
    }

    // 定义子向父传值函数
    changeState = (todoObj) => {
        // 获取当前todos
        const { todos } = this.state
        // 将新得到的对象添加到todos
        todos.unshift(todoObj)
        // 将更新后的todos更新到state
        this.setState({ todos })
    }

    // 定义孙向爷传值函数
    changeDone = (id, checked) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            if (todo.id !== id) return todo
            return {...todo, done: checked}
        })
        this.setState({ todos: newTodos })
    }

    // 定义删除代办项函数
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => {
            return todo.id !== id
        })
        this.setState({ todos: newTodos })
    }

    // 全选或全不选待办事项
    changeAllDoneState = (flag) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            return {...todo, done: flag}
        })
        this.setState({ todos: newTodos })
    }

    // 删除所有已完成待办事项
    deleteAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => {
            return !todo.done
        })
        this.setState({ todos: newTodos })
    }

    render() {
        // 获取自身状态
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header changeState={this.changeState}></Header>
                    <List todos={todos} changeDone={this.changeDone} deleteTodo={this.deleteTodo}></List>
                    <Footer todos={todos} changeAllDoneState={this.changeAllDoneState} deleteAllDone={this.deleteAllDone}></Footer>
                </div>
            </div>
        );
    }
}

export default App;
