import React, {Component} from 'react';
import PropTypes from "prop-types";
import Item from "../Item";
import './index.css'

class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeDone: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        // 获取父组件传来的props
        const { todos, changeDone, deleteTodo } = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map(todo => {
                            // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}></Item>
                            return <Item key={todo.id} changeDone={changeDone} deleteTodo={deleteTodo} {...todo}></Item>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;
