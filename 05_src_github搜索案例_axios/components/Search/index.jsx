import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";

class Search extends Component {

    static propTypes = {
        loadUsers: PropTypes.func.isRequired,
        changeState: PropTypes.func.isRequired
    }

    onSearch = () => {
        // 获取App提供的保存用户函数
        const { loadUsers, changeState } = this.props
        // 获取用户的输入(连续结构赋值+重命名)
        const { keyWordNode: { value: keyword } } = this
        // 发送请求之前改变状态对象
        changeState({
            isFirst: false,
            isLoading: true
        })
        // 发送网络请求
        axios.get(`/api1/search/users?q=${keyword}`).then(
            res => {
                const { data: {items} } = res
                loadUsers(items)
                changeState({ isLoading: false })
            },
            err => changeState({ isLoading: false, err: err.message })
        )
    }

    /*// ref 回调函数
    inputValueRef = (c) => {
        this.keyWordNode = c
    }*/

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordNode = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.onSearch}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;
