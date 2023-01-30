import React, {Component} from 'react';
import { Button } from 'antd'
import { YoutubeFilled } from '@ant-design/icons'

class App extends Component {

    render() {
        return (
            <div>
                <h1>App...</h1>
                <Button  type="primary" icon={<YoutubeFilled />}>Ant Design Button</Button>
            </div>
        );
    }
}

export default App;
