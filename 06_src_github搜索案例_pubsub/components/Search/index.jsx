import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";

class Search extends Component {

    onSearch = () => {
        // 获取用户的输入(连续结构赋值+重命名)
        const { keyWordNode: { value: keyword } } = this
        // 发布消息
        PubSub.publish('state', { isFirst: false, isLoading: true })
        // 发送网络请求
        axios.get(`/api1/search/users?q=${keyword}`).then(
            res => {
                const { data: {items} } = res
                PubSub.publish('state', { isLoading: false, users: items })
            },
            err => PubSub.publish('state', { isLoading: false, err: err.message })
        )
        // Fetch发送网络请求
        /*fetch(`/api1/search666/users?q=${keyword}`).then(
            res => res.json(),
            err => new Promise(() => {})
        ).then(
            res => console.log(res),
            err => console.error(err)
        )*/
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
