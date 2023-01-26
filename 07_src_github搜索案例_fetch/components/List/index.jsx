import React, {Component} from 'react';
import PubSub from "pubsub-js";
import './index.css'

class List extends Component {

    state = { isFirst: true, isLoading: false, err: '', users: [] }

    componentDidMount() {
        this.pState = PubSub.subscribe('state', (_, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.pState)
    }

    render() {
        const { isFirst, isLoading, err, users } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>Welcome,please input keyword,then click search button</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2>{err}</h2> :
                    users.map((user) => {
                        return (
                            <div key={user.id} className="card">
                                <a href={user.html_url} target="_blank" rel="noreferrer">
                                    <img alt='avatar' src={user.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;
