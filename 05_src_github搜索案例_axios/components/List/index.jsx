import React, {Component} from 'react';
import './index.css'

class List extends Component {

    render() {
        const { users, isFirst, isLoading, err } = this.props
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
